/* Hue Bridge access for the Lights picker. The key is injected at build time; __HUE_KEY__ stays in source. */
window.CleanFrameHue = {
  bridge: 'http://192.168.1.71',
  key: '__HUE_KEY__',
  groups: ['Living room', 'TV', 'Hangout', 'Downstairs', 'Dining', 'Kitchen', 'Entry'],
  hideScenes: ['New scene', 'Alexa Scene']
};
