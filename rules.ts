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
    // spacebar: open(
    //   "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    // ),
    // b = "B"rowse
    b: {
      m: open(
        "https://vosker.sharepoint.com/sites/MaviechezVOSKER2?xsdata=MDV8MDJ8fGVkOTQxOGRmMjk4MjQxNDNkZmU5MDhkYzdmZGY5Mzg4fDc3OWRkOGNlYjMxZjQ3ZjE4OGQ2OTk0MGFkYjY1YzUzfDB8MHw2Mzg1MjU4NDU0MDk0MjMzMzd8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPbTFsWlhScGJtZGZUVmRTYUUxNlozcFBWMGwwV1ZkRk0wNXBNREJhYWtreVRGUnJORTV0UlhSWmFrNW9UbnBTYlUweVVUQk9lazVwUUhSb2NtVmhaQzUyTWk5dFpYTnpZV2RsY3k4eE56RTJPVGczTnpNNU5UQXh8YmJkY2JlNjM0YzY2NDUwOWRmZTkwOGRjN2ZkZjkzODh8YjQ5MzE5YWUyNDMwNDVlZDgyYmJjMzI3YjFkYWJhYTI%3d&sdata=Y2NZMy8veEJlYWhyYUZqUjVPcVBQeHRMRGs2Z1NkM2U0a1JybWlJT3RpVT0%3d&ovuser=779dd8ce-b31f-47f1-88d6-9940adb65c53%2cmickael.martos%40vosker.com&OR=Teams-HL&CT=1716987741698&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI1MC8yNDA0MTEyMjMxNSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3d%3d&SafelinksUrl=https%3a%2f%2fvosker.sharepoint.com%2fsites%2fMaviechezVOSKER2"
      ),

      y: open(
        "https://vosker.atlassian.net/jira/software/c/projects/TIO/list?filter=%22assignee%22%20%3D%20%27712020%3Ae2c433c2-7a7a-4268-8899-bb697281f6ec%27"
      ),

      // Quarterly "P"lan
      p: open("https://qrtr.ly/plan"),
      // n which is k in colemak for kanban
      n: open(
        "https://vosker.atlassian.net/jira/software/c/projects/TIO/boards/61?assignee=712020%3Ae2c433c2-7a7a-4268-8899-bb697281f6ec"
      ),

      l: open("http://localhost:3000"),
    },
    // o = "Open" applications
    semicolon: {
      v: app("Visual Studio Code"),
      o: app("Obsidian"),
      s: app("Arc"),
      g: app("Slack"),
      w: app("Warp"),
      j: app("Anki"),
      f: app("Microsoft Teams"),
      n: app("Docker"),
      r: app("Postman"),

      // Microsoft outlook
      m: app("Microsoft Outlook"),
      e: app("Finder"),
      d: app("Spotify"),
      h: app("Dashlane"),
      c: app("Akiflow"),


      // "W"hatsApp has been replaced by Texts
      // l: open(
      //   "raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"
      // ),
    },

    q: {
      to: [
        {
          key_code: "grave_accent_and_tilde",
          modifiers: ["left_command"],
        },
      ],
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
      b: raycast("raycast/window-management/previous-desktop"),
      n: raycast("raycast/window-management/next-desktop"),
      p: {
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["left_command"],
          },
        ],
      },
      // add shortcut to quit all apps
      // add shortcut to toggle system appearance
      // r: {
      //   description: "Window: Hide",
      //   to: [
      //     {
      //       key_code: "h",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
      r: {
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
      // n: {
      //   description: "Window: Next Window",
      //   to: [
      //     {
      //       key_code: "grave_accent_and_tilde",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
      // b: {
      //   description: "Window: Back",
      //   to: [
      //     {
      //       key_code: "open_bracket",
      //       modifiers: ["right_command"],
      //     },
      //   ],
      // },
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
      t: raycast("raycast/system/toggle-system-appearance"),
      n: open("raycast://script-commands/dismiss-notifications"),
      k: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      v: open("raycast://extensions/raycast/system/open-camera"),
      p: open("raycast://extensions/raycast/raycast/confetti"),
      c: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
      j: open("raycast://extensions/raycast/raycast-notes/raycast-notes"),

      e: open("raycast://ai-commands/fix-spelling-and-grammar"),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
      r: open("raycast://extensions/MarkusLanger/vscode-project-manager/search-project-manager-projects"),
    },


    // // s = "System"
    d: {
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      e: {
        to: [
          {
            // Emoji picker
            key_code: "spacebar",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      // Turn on Elgato KeyLight
      y: {
        to: [
          {
            shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
          },
        ],
      },
      h: {
        to: [
          {
            shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
          },
        ],
      },
      // "D"o not disturb toggle
      d: open(`raycast://extensions/yakitrak/do-not-disturb/toggle`),
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

    v: {
      j: {
        to: [{ key_code: "left_arrow" }],
      },
      k: {
        to: [{ key_code: "down_arrow" }],
      },
      l: {
        to: [{ key_code: "up_arrow" }],
      },
      semicolon: {
        to: [{ key_code: "right_arrow" }],
      },
      m: {
        to: [
          {
            key_code: "spacebar",
            modifiers: [
              "left_shift",
              "left_command"
            ]
          }
        ]
      },
      comma: {
        to: [{ key_code: "l", modifiers: ["left_shift", "left_command"] }],
      },
      n: {
        to: [{ key_code: "q", modifiers: ["control", "option"] }],
      },
    },
    m: {
      to: [
        {
          key_code: "spacebar",
          modifiers: [
            "left_shift",
            "left_command"
          ]
        }
      ]
    },
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
          key_code: "grave_accent_and_tilde",
          modifiers: ["right_option"],
          repeat: false,
        },
        {
          halt: false,
          key_code: "i",
          lazy: true,
          repeat: false,
        },
      ],
    },
    a: {
      to: [
        {
          hold_down_milliseconds: 1,
          key_code: "grave_accent_and_tilde",
          modifiers: ["right_option"],
          repeat: false,
        },
        {
          halt: false,
          key_code: "a",
          lazy: true,
          repeat: false,
        },
      ],
    },
    c: {
      to: [
        {
          hold_down_milliseconds: 1,
          key_code: "c",
          modifiers: ["right_option"],
          repeat: false,
        },
      ],
    },
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

