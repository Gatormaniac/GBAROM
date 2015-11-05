System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "index.coffee!github:forresto/system-coffee@0.1.2",
      "github:satazor/sparkmd5@1.0.1",
      "github:stuk/jszip@2.5.0",
      "npm:localforage@1.3.0",
      "utils.js",
      "github:satazor/sparkmd5@1.0.1/spark-md5",
      "npm:localforage@1.3.0/dist/localforage",
      "github:stuk/jszip@2.5.0/dist/jszip",
      "settings.json!github:systemjs/plugin-json@0.1.0",
      "github:jspm/nodelibs-process@0.1.2",
      "github:matthewbauer/x-game@1.2.0",
      "github:jspm/nodelibs-process@0.1.2/index",
      "github:matthewbauer/x-game@1.2.0/x-retro",
      "npm:process@0.11.2",
      "github:matthewbauer/window@0.0.3",
      "github:matthewbauer/document@0.0.4",
      "npm:babel-runtime@5.8.29/core-js/object/create",
      "github:matthewbauer/x-game@1.2.0/player.coffee!github:forresto/system-coffee@0.1.2",
      "npm:process@0.11.2/browser",
      "github:matthewbauer/window@0.0.3/window",
      "npm:core-js@1.2.5/library/fn/object/create",
      "github:matthewbauer/document@0.0.4/document",
      "github:mohayonao/web-audio-api-shim@0.3.0",
      "npm:core-js@1.2.5/library/modules/$",
      "github:webcomponents/webcomponentsjs@0.7.15",
      "github:mohayonao/web-audio-api-shim@0.3.0/build/web-audio-api-shim",
      "github:webcomponents/webcomponentsjs@0.7.15/webcomponents-lite"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.33",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "coffee": "github:forresto/system-coffee@0.1.2",
    "core-js": "npm:core-js@1.2.5",
    "document": "github:matthewbauer/document@0.0.4",
    "gambatte": "npm:gambatte@0.8.1",
    "gw": "npm:gw@0.8.1",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jszip": "github:stuk/jszip@2.5.0",
    "localforage": "npm:localforage@1.3.0",
    "nestopia": "npm:nestopia@0.8.1",
    "picodrive": "npm:picodrive@0.8.1",
    "raw": "github:matthewbauer/plugin-raw@0.3.1",
    "snes9x-next": "npm:snes9x-next@0.8.1",
    "sparkmd5": "github:satazor/sparkmd5@1.0.1",
    "traceur": "github:jmcriffey/bower-traceur@0.0.91",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.91",
    "vba-next": "npm:vba-next@0.8.1",
    "vecx": "npm:vecx@0.8.1",
    "window": "github:matthewbauer/window@0.0.3",
    "x-game": "github:matthewbauer/x-game@1.2.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:matthewbauer/document@0.0.4": {
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.7.15"
    },
    "github:matthewbauer/plugin-raw@0.3.1": {
      "fetch": "github:github/fetch@0.9.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "github:matthewbauer/window@0.0.3": {
      "web-audio-api-shim": "github:mohayonao/web-audio-api-shim@0.3.0"
    },
    "github:matthewbauer/x-game@1.2.0": {
      "coffee": "github:forresto/system-coffee@0.1.2",
      "document": "github:matthewbauer/document@0.0.4",
      "jszip": "github:stuk/jszip@2.5.0",
      "raw": "github:matthewbauer/plugin-raw@0.3.1",
      "sparkmd5": "github:satazor/sparkmd5@1.0.1",
      "window": "github:matthewbauer/window@0.0.3"
    },
    "npm:asap@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:localforage@1.3.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@5.0.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@5.0.0": {
      "asap": "npm:asap@1.0.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
