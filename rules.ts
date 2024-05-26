import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, raycast } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description:
      "CODEmak (Coder's Colemak) Lite: just unshift number row (rev 10/18)",
    manipulators: [
      {
        description: "shift-4/$ ⇒ 4",
        from: {
          key_code: "4",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "4",
          },
        ],
        type: "basic",
      },
      {
        description: "1 ⇒ shift-1/!",
        from: {
          key_code: "1",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "1",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-3/# ⇒ 3",
        from: {
          key_code: "3",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "3",
          },
        ],
        type: "basic",
      },
      {
        description: "3 ⇒ shift-3/#",
        from: {
          key_code: "3",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "3",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-2/@ ⇒ 2",
        from: {
          key_code: "2",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "2",
          },
        ],
        type: "basic",
      },
      {
        description: "5 ⇒ shift-5/%",
        from: {
          key_code: "5",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "5",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-1/! ⇒ 1",
        from: {
          key_code: "1",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "1",
          },
        ],
        type: "basic",
      },
      {
        description: "7 ⇒ shift-7/&",
        from: {
          key_code: "7",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "7",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-5/% ⇒ 5",
        from: {
          key_code: "5",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "5",
          },
        ],
        type: "basic",
      },
      {
        description: "9 ⇒ shift-9/(",
        from: {
          key_code: "9",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "9",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-7/& ⇒ 7",
        from: {
          key_code: "7",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "7",
          },
        ],
        type: "basic",
      },
      {
        description: "2 ⇒ shift-2/@",
        from: {
          key_code: "2",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "2",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-8/* ⇒ 8",
        from: {
          key_code: "8",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "8",
          },
        ],
        type: "basic",
      },
      {
        description: "4 ⇒ shift-4/$",
        from: {
          key_code: "4",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "4",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-9/( ⇒ 9",
        from: {
          key_code: "9",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "9",
          },
        ],
        type: "basic",
      },
      {
        description: "6 ⇒ shift-6/^",
        from: {
          key_code: "6",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "6",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-0/) ⇒ 0",
        from: {
          key_code: "0",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "0",
          },
        ],
        type: "basic",
      },
      {
        description: "8 ⇒ shift-8/*",
        from: {
          key_code: "8",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "8",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        description: "shift-6/^ ⇒ 6",
        from: {
          key_code: "6",
          modifiers: {
            mandatory: ["shift"],
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "6",
          },
        ],
        type: "basic",
      },
      {
        description: "0 ⇒ shift-0/)",
        from: {
          key_code: "0",
          modifiers: {
            optional: ["command", "control", "option"],
          },
        },
        to: [
          {
            key_code: "0",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      //      {
      //        type: "basic",
      //        description: "Disable CMD + Tab to force Hyper Key usage",
      //        from: {
      //          key_code: "tab",
      //          modifiers: {
      //            mandatory: ["left_command"],
      //          },
      //        },
      //        to: [
      //          {
      //            key_code: "tab",
      //          },
      //        ],
      //      },
    ],
  },
  ...createHyperSubLayers({
    k: {
      to: [
        {
          hold_down_milliseconds: 1,
          key_code: "k",
          modifiers: ["right_alt"],
          repeat: false,
        },
        {
          halt: false,
          key_code: "k",
          lazy: true,
          repeat: false,
        },
      ],
    },
    i: {
      to: [
        {
          hold_down_milliseconds: 1,
          key_code: "non_us_backslash",
          modifiers: ["right_option"],
          repeat: false,
        },
        {
          halt: false,
          key_code: "non_us_backslash",
          lazy: true,
          repeat: false,
        },
      ],
    },
    a: {
      to: [
        {
          hold_down_milliseconds: 1,
          key_code: "non_us_backslash",
          modifiers: ["right_option"],
          repeat: false,
        },
        {
          halt: false,
          key_code: "non_us_backslash",
          lazy: true,
          repeat: false,
        },
      ],
    },

    spacebar: open(
      "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    ),
    // b = "B"rowse
    b: {
      t: open("https://twitter.com"),
      // Quarterly "P"lan
      p: open("https://qrtr.ly/plan"),
      n: open("https://www.keybr.com/"),
      l: open("http://localhost:3000"),
    },
    // o = "Open" applications
    semicolon: {
      v: app("Visual Studio Code"),
      o: app("Obsidian"),
      s: app("Arc"),
      m: app("Morgen"),
      g: app("Discord"),
      w: app("Warp"),
      j: app("Anki"),
      t: app("Teams"),
      n: app("Docker"),
      // Open todo list managed via *H*ypersonic
      // h: open(
      //   "notion://www.notion.so/stellatehq/7b33b924746647499d906c55f89d5026"
      // ),
      // z: app("zoom.us"),
      // "M"essages
      // m: app("Texts"),
      e: app("Finder"),
      d: app("Spotify"),
      h: app("Dashlane"),
      b: app("Beeper"),
      c: app("ClickUp"),

      // "W"hatsApp has been replaced by Texts
      l: open(
        "raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"
      ),
    },

    // w = "Window" via rectangle.app
    w: {
      right_arrow: raycast("raycast/window-management/right-half"),
      left_arrow: raycast("raycast/window-management/left-half"),
      down_arrow: raycast("raycast/window-management/bottom-half"),
      up_arrow: raycast("raycast/window-management/top-half"),
      h: raycast("raycast/window-management/left-half"),
      j: raycast("raycast/window-management/bottom-half"),
      k: raycast("raycast/window-management/top-half"),
      l: raycast("raycast/window-management/right-half"),
      y: raycast("raycast/window-management/previous-display"),
      o: raycast("raycast/window-management/next-display"),
      m: raycast("raycast/window-management/maximize"),
      e: raycast("raycast/window-management/toggle-fullscreen"),
      // add shortcut to quit all apps
      // add shortcut to toggle system appearance
      r: {
        description: "Window: Hide",
        to: [
          {
            key_code: "h",
            modifiers: ["right_command"],
          },
        ],
      },
      d: {
        description: "close window",
        to: [
          {
            key_code: "w",
            modifiers: ["left_command"],
          },
        ],
      },
      u: {
        description: "Window: Previous Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control", "right_shift"],
          },
        ],
      },
      i: {
        description: "Window: Next Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control"],
          },
        ],
      },
      n: {
        description: "Window: Next Window",
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["right_command"],
          },
        ],
      },
      b: {
        description: "Window: Back",
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      // Note: No literal connection. Both f and n are already taken.
      //   m: {
      //     description: "Window: Forward",
      //     to: [
      //       {
      //         key_code: "close_bracket",
      //         modifiers: ["right_command"],
      //       },
      //     ],
      //   },
      // d: {
      //   description: "Window: Next display",
      //   to: [
      //     {
      //       key_code: "right_arrow",
      //       modifiers: ["right_control", "right_option", "right_command"],
      //     },
      //   ],
      // },
    },

    // r = "Raycast"
    s: {
      a: raycast("raycast/system/toggle-system-appearance"),
      n: open("raycast://script-commands/dismiss-notifications"),
      k: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      v: open("raycast://extensions/raycast/system/open-camera"),
      p: open("raycast://extensions/raycast/raycast/confetti"),
      c: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
    },

    // f (t) for timers
    f: {
      d: open("raycast://extensions/ThatNerd/timers/dismissTimerAlert"),
      n: open("raycast://extensions/ThatNerd/timers/startCustomTimer"),
      m: open("raycast://extensions/ThatNerd/timers/manageTimers"),
      y: open("raycast://extensions/ThatNerd/timers/start5MinuteTimer"),
      u: open("raycast://extensions/ThatNerd/timers/start15MinuteTimer"),
      i: open("raycast://extensions/ThatNerd/timers/start30MinuteTimer"),
      o: open("raycast://extensions/ThatNerd/timers/start60MinuteTimer"),
      e: open("raycast://extensions/ThatNerd/timers/stopRunningTimer"),
    },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim

    // h: {
    //   to: [{ key_code: "left_arrow" }],
    // },
    // j: {
    //   to: [{ key_code: "down_arrow" }],
    // },
    // k: {
    //   to: [{ key_code: "up_arrow" }],
    // },
    // l: {
    //   to: [{ key_code: "right_arrow" }],
    // },
    // // // Magicmove via homerow.app
    // m: {
    //   to: [{ key_code: "7", modifiers: ["left_shift"] }],
    // },
    // // Scroll mode via homerow.app
    // s: {
    //   to: [{ key_code: "j", modifiers: ["right_control"] }],
    // },
    // d: {
    //   to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
    // },
    // u: {
    //   to: [{ key_code: "page_down" }],
    // },
    // i: {
    //   to: [{ key_code: "page_up" }],
    // },
  }),
];
fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);

// // s = "System"
// s: {
//   u: {
//     to: [
//       {
//         key_code: "volume_increment",
//       },
//     ],
//   },
//   j: {
//     to: [
//       {
//         key_code: "volume_decrement",
//       },
//     ],
//   },
//   i: {
//     to: [
//       {
//         key_code: "display_brightness_increment",
//       },
//     ],
//   },
//   k: {
//     to: [
//       {
//         key_code: "display_brightness_decrement",
//       },
//     ],
//   },
//   l: {
//     to: [
//       {
//         key_code: "q",
//         modifiers: ["right_control", "right_command"],
//       },
//     ],
//   },
//   p: {
//     to: [
//       {
//         key_code: "play_or_pause",
//       },
//     ],
//   },
//   semicolon: {
//     to: [
//       {
//         key_code: "fastforward",
//       },
//     ],
//   },
//   e: {
//     to: [
//       {
//         // Emoji picker
//         key_code: "spacebar",
//         modifiers: ["right_control", "right_command"],
//       },
//     ],
//   },
//   // Turn on Elgato KeyLight
//   y: {
//     to: [
//       {
//         shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
//       },
//     ],
//   },
//   h: {
//     to: [
//       {
//         shepll_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
//       },
//     ],
//   },
//   // "D"o not disturb toggle
//   d: open(`raycast://extensions/yakitrak/do-not-disturb/toggle`),
// },
