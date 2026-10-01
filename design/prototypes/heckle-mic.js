// <heckle-mic> — rotatable three.js stage microphone. Drag to spin; inertia + idle auto-rotate.
(() => {
  if (customElements.get('heckle-mic')) return;
  const V = '0.160.0';
  const load = () => Promise.all([
    import(`https://esm.sh/three@${V}`),
    import(`https://esm.sh/three@${V}/examples/jsm/environments/RoomEnvironment.js`)
  ]);

  class HeckleMic extends HTMLElement {
    connectedCallback() {
      if (this._init) return; this._init = true;
      this.style.display = 'block'; this.style.position = 'absolute'; this.style.inset = '0'; this.style.width = '100%'; this.style.height = '100%'; this.style.touchAction = 'pan-y';
      this.style.cursor = 'grab';
      load().then(([T, R]) => this.build(T, R.RoomEnvironment)).catch((e) => console.error('heckle-mic', e));
    }
    disconnectedCallback() { cancelAnimationFrame(this._raf); this._onWin && window.removeEventListener('pointermove', this._onWin); this._ro && this._ro.disconnect(); this._io && this._io.disconnect(); this._r && this._r.dispose(); this._init = false; }

    build(T, RoomEnvironment) {
      const r = this._r = new T.WebGLRenderer({ antialias: true, alpha: true });
      r.setPixelRatio(Math.min(2, devicePixelRatio));
      r.outputColorSpace = T.SRGBColorSpace; r.toneMapping = T.ACESFilmicToneMapping; r.toneMappingExposure = 1.05;
      r.shadowMap.enabled = true; r.shadowMap.type = T.PCFSoftShadowMap;
      r.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
      this.appendChild(r.domElement);

      const scene = new T.Scene();
      const pm = new T.PMREMGenerator(r);
      scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
      const cam = new T.PerspectiveCamera(30, 1, 0.1, 100);
      cam.position.set(0, 0.6, 7.2); cam.lookAt(0, 0.15, 0);

      const key = new T.SpotLight(0xfff1b0, 60, 20, 0.42, 0.55, 1.4);
      key.position.set(1.2, 6, 2.5); key.target.position.set(0, -1.4, 0);
      key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -0.0005;
      scene.add(key, key.target);
      const rim = new T.DirectionalLight(0xffd400, 2.2); rim.position.set(-4, 2, -3); scene.add(rim);
      scene.add(new T.AmbientLight(0xffffff, 0.15));

      const floor = new T.Mesh(new T.CircleGeometry(4, 64), new T.ShadowMaterial({ opacity: 0.55 }));
      floor.rotation.x = -Math.PI / 2; floor.position.y = -1.75; floor.receiveShadow = true; scene.add(floor);
      const pool = new T.Mesh(new T.CircleGeometry(1.9, 64), new T.MeshBasicMaterial({ color: 0xffd400, transparent: true, opacity: 0.07 }));
      pool.rotation.x = -Math.PI / 2; pool.position.y = -1.745; scene.add(pool);

      const chrome = new T.MeshStandardMaterial({ name: 'Chrome', color: 0xdedede, metalness: 1, roughness: 0.22 });
      const satin = new T.MeshStandardMaterial({ name: 'Satin', color: 0x1a1a1a, metalness: 0.6, roughness: 0.38 });
      const accent = new T.MeshStandardMaterial({ name: 'Accent', color: 0xffd400, metalness: 0.2, roughness: 0.45 });
      const foam = new T.MeshStandardMaterial({ name: 'Foam', color: 0x0b0b0b, roughness: 1 });
      const rubber = new T.MeshStandardMaterial({ name: 'Rubber', color: 0x111111, roughness: 0.7 });
      const cast = (m) => { m.castShadow = true; return m; };

      const mic = new T.Group(); mic.name = 'Microphone';
      const core = cast(new T.Mesh(new T.SphereGeometry(0.47, 48, 32), foam)); core.position.y = 1.25; core.name = 'GrilleCore';
      const grille = cast(new T.Mesh(new T.IcosahedronGeometry(0.5, 7), new T.MeshStandardMaterial({ name: 'GrilleMesh', color: 0xe6e6e6, metalness: 1, roughness: 0.3, wireframe: true })));
      grille.position.y = 1.25; grille.name = 'Grille';
      const ring = cast(new T.Mesh(new T.CylinderGeometry(0.46, 0.44, 0.16, 64), chrome)); ring.position.y = 0.9; ring.name = 'GrilleRing';
      const band = cast(new T.Mesh(new T.TorusGeometry(0.44, 0.045, 16, 64), accent)); band.rotation.x = Math.PI / 2; band.position.y = 0.8; band.name = 'Band';
      const body = cast(new T.Mesh(new T.CylinderGeometry(0.42, 0.24, 1.6, 64), satin)); body.position.y = 0.0; body.name = 'Handle';
      const sw = cast(new T.Mesh(new T.BoxGeometry(0.1, 0.22, 0.08), accent)); sw.position.set(0, 0.25, 0.37); sw.rotation.x = -0.1; sw.name = 'Switch';
      const tail = cast(new T.Mesh(new T.CylinderGeometry(0.24, 0.22, 0.22, 48), chrome)); tail.position.y = -0.91; tail.name = 'Connector';
      const cap = cast(new T.Mesh(new T.CylinderGeometry(0.2, 0.2, 0.04, 48), rubber)); cap.position.y = -1.03;
      mic.add(core, grille, ring, band, body, sw, tail, cap);
      const curve = new T.CatmullRomCurve3([
        new T.Vector3(0, -1.05, 0), new T.Vector3(0, -1.5, 0.05), new T.Vector3(0.4, -1.72, 0.5),
        new T.Vector3(1.4, -1.72, 0.2), new T.Vector3(2.2, -1.72, -0.9), new T.Vector3(3.4, -1.72, -1.6)
      ]);
      const cable = cast(new T.Mesh(new T.TubeGeometry(curve, 120, 0.05, 12, false), rubber)); cable.name = 'Cable';

      const spin = new T.Group(); spin.add(mic);
      mic.rotation.z = -0.32; mic.position.y = 0.15;
      scene.add(spin); scene.add(cable);
      this.group = spin;

      let rotY = 0.6, rotX = 0, vel = 0.004, drag = null, last = 0, visible = true, bob = 0, mx = 0, my = 0, tmx = 0, tmy = 0, pulse = 0, moved = 0;
      const baseKey = key.intensity;
      this._onWin = (e) => { const b = this.getBoundingClientRect(); tmx = ((e.clientX - b.left) / b.width - 0.5) * 2; tmy = ((e.clientY - b.top) / b.height - 0.5) * 2; };
      window.addEventListener('pointermove', this._onWin, { passive: true });
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, y: e.clientY, ry: rotY, rx: rotX }; last = e.clientX; vel = 0; moved = 0; this.style.cursor = 'grabbing'; this.setPointerCapture(e.pointerId); });
      this.addEventListener('pointermove', (e) => {
        if (!drag) return;
        rotY = drag.ry + (e.clientX - drag.x) * 0.01;
        rotX = Math.max(-0.5, Math.min(0.5, drag.rx + (e.clientY - drag.y) * 0.005));
        moved = Math.max(moved, Math.abs(e.clientX - drag.x) + Math.abs(e.clientY - drag.y));
        vel = (e.clientX - last) * 0.01; last = e.clientX;
      });
      const up = () => { if (!drag) return; if (moved < 5) { pulse = 1; vel += 0.12; } drag = null; this.style.cursor = 'grab'; this._idleAt = performance.now(); };
      this.addEventListener('pointerup', up); this.addEventListener('pointercancel', up);

      const size = () => { const w = this.clientWidth || 1, h = this.clientHeight || 1; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
      this._ro = new ResizeObserver(size); this._ro.observe(this); size();
      this._io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; }); this._io.observe(this);

      const tick = () => {
        this._raf = requestAnimationFrame(tick);
        if (!visible) return;
        const auto = this.getAttribute('autorotate') !== 'false' && !reduced;
        if (!drag) {
          rotY += vel; vel *= 0.95;
          if (auto && Math.abs(vel) < 0.004 && performance.now() - (this._idleAt || 0) > 1500) vel += (0.004 - vel) * 0.05;
          rotX *= 0.96;
        }
        bob += reduced ? 0 : 0.015;
        mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
        pulse *= 0.93;
        const s = 1 + pulse * 0.08;
        spin.scale.set(s, s, s);
        key.intensity = baseKey * (1 + pulse * 1.6);
        spin.rotation.y = rotY + mx * 0.35; spin.rotation.x = rotX + my * 0.18; spin.rotation.z = -mx * 0.12;
        spin.position.y = Math.sin(bob) * 0.05 + pulse * 0.12;
        r.render(scene, cam);
      };
      tick();
      this.dispatchEvent(new CustomEvent('ready'));
    }
  }
  customElements.define('heckle-mic', HeckleMic);
})();
