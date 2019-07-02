// &lt; <
// &gt; >

export default {
  install: 'npm i vue-prlx',

  initEs: `import Vue from 'vue'

// As a plugin
import VuePrlx from 'vue-prlx'
Vue.use(VuePrlx);

// As a directive (local)
import { VuePrlxDirective } from 'vue-prlx'
Vue.directive('prlx', VuePrlxDirective);`,

  initBrowser: `&lt;script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"&gt;&lt;/script&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue-prlx/dist/v-prlx.min.js">&lt;/script&gt;

&lt;script&gt;
// As a plugin
Vue.use(VuePrlx.VuePrlxPlugin);

// As a directive (local)
Vue.directive('prlx', VuePrlx.VuePrlxDirective);
&lt;/script&gt;`,

  default: `// Default usage

&lt;img v-prlx&gt;`,

  mobile: `// Parallax on mobile

// .mobile

// Parallax is disabled on mobile by default

// usage - modifier
// type - boolean
// default - false

&lt;img v-prlx.mobile&gt;`,

  mobileWidth: `// Mobile max width (px)

// mobileWidth

// use mobileMaxWidth to change mobile width

// usage - value key
// type - number
// default - 768

&lt;img v-prlx="{ mobileMaxWidth: 500 }"&gt;
  `,

  fromBottom: `// Start parallax from very bottom of the screen

// fromBottom

// by default parallax magic starts from middle of the screen

// usage - value key
// type - boolean
// default - false

&lt;img v-prlx="{ fromBottom: true }"&gt;
  `,

  reverse: `// Reverse parallax direction

// reverse

// usage - value key
// type - boolean
// default - false

&lt;img v-prlx="{ reverse: true }"&gt;
  `,

  speed: `// Control parallax speed (power)

// speed

// usage - value key
// type - number
// default - 0.15 
// default for background-position - 0.02

&lt;img v-prlx="{ speed: 0.3 }"&gt;
  `,

  preserveInitialPosition: `// Allow parallax to negative values

// preserveInitialPosition

// usage - value key
// type - boolean
// default - true

&lt;img v-prlx="{ preserveInitialPosition: false }"&gt;
  `,

  limit: `// Limit min and max offset

// limit

// usage - value key
// type - object
// default - null
// default for background-position - { min: 0, max: 100 }

&lt;img v-prlx="{
  preserveInitialPosition: false,
  limit: { min: -30, max: 30 }
}"&gt;
  `,

  background: `// Parallax background-position

// .background

// usage - modifier
// type - boolean
// default - false

&lt;img v-prlx.background="{ speed: 0.07 }""&gt;
  `,

  direction: `// Parallax axis

// direction

// Works with both transform and background

// usage - value key
// type - string
// default - 'y'

&lt;img v-prlx.background="{
  direction: 'x',
  speed: 0.07,
  fromBottom: true
}"&gt;
  `,

  custom: `// Custom animation

// custom

// Just adds '--parallax-value' css variable to element
// so add css for example:
// transform: scale(calc(var(--parallax-value) / 70 ));

// usage - value key
// type - boolean
// default - false

&lt;img v-prlx="{
  custom: true,
  limit: { min: 0, max: 70 }
}"&gt;
  `,

  off: `// Disable parallax

// off

// Conditionally switch animation off

// usage - value key
// type - boolean
// default - false

&lt;img v-prlx="{ disabled: disablilityCondition }"&gt;
  `
}
