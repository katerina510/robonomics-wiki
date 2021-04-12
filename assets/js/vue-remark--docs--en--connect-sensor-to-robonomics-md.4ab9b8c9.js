(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{MSRo:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),r=n("UQSp"),a=n("Kw5r");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},c=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===i(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:n[t]=function(){return s[t]}}))},l=a.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",u={excerpt:null,title:"Connect Sensor To Robonomics Network",contributors:["LoSk-p","Vourhey"],translated:!0};var p=function(t){t.options[d]&&(t.options[d]=u),a.a.util.defineReactive(t.options,d,u),t.options.computed=l.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},h=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h2",{attrs:{id:"requiremets"}},[o("a",{attrs:{href:"#requiremets","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Requiremets")]),o("ul",[o("li",[t._v("ESP8266 Node MCU v3")]),o("li",[t._v("particle sensor SDS011")]),o("li",[t._v("micro USB cable")]),o("li",[t._v("connecting wires")])]),o("h2",{attrs:{id:"assembling"}},[o("a",{attrs:{href:"#assembling","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Assembling")]),o("h3",{attrs:{id:"connection-diagram"}},[o("a",{attrs:{href:"#connection-diagram","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Connection Diagram")]),o("p",[o("g-image",{attrs:{src:n("mtsL"),alt:"scheme"}})],1),o("h3",{attrs:{id:"connecting-sds011"}},[o("a",{attrs:{href:"#connecting-sds011","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Connecting SDS011")]),o("ul",[o("li",[t._v("Pin 1 (TX) -> (RX) Pin D1 (GPIO5)")]),o("li",[t._v("Pin 2 (RX) -> (TX) Pin D2 (GPIO4)")]),o("li",[t._v("Pin 3 (GND) -> GND")]),o("li",[t._v("Pin 4 (2.5m) -> unused")]),o("li",[t._v("Pin 5 (5V) -> VU")]),o("li",[t._v("Pin 6 (1m) -> unused")])]),o("p",[t._v("Sensor is shipped with a USB adapter and connection wires. You don't need USB adapter, so disconnect wires from it.")]),o("p",[o("g-image",{attrs:{src:n("/xWz"),alt:"disconnect"}})],1),o("p",[t._v('You may connect it to ESP via connecting wires "Female-Male":')]),o("p",[o("g-image",{attrs:{src:n("T02V"),alt:"f-m"}})],1),o("p",[t._v("And connect them to your ESP according to the connection diagram.")]),o("p",[t._v("Or you can use wires from USB adapter. Disconnect one wire: push on it with some sharp object and carefully pull the wire:")]),o("p",[o("g-image",{attrs:{src:n("+uYf"),alt:"extreme_con"}})],1),o("p",[t._v("Insert it to last connector:")]),o("p",[o("g-image",{attrs:{src:n("pdbf"),alt:"extr"}})],1),o("p",[t._v("Then cut the connector in the middle:")]),o("p",[o("g-image",{attrs:{src:n("ra+Z"),alt:"cut"}})],1),o("p",[t._v("And connect them to ESP according to the diagram:")]),o("p",[o("g-image",{attrs:{src:n("C2xw"),alt:"esp_con"}})],1),o("h3",{attrs:{id:"connecting-dht22"}},[o("a",{attrs:{href:"#connecting-dht22","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Connecting DHT22")]),o("ul",[o("li",[t._v("Pin 1 => 3V3")]),o("li",[t._v("Pin 2 => Pin D7 (GPIO13)")]),o("li",[t._v("Pin 3 => unused")]),o("li",[t._v("Pin 4 => GND")])]),o("h3",{attrs:{id:"connecting-bme280htu21d"}},[o("a",{attrs:{href:"#connecting-bme280htu21d","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Connecting BME280/HTU21D")]),o("ul",[o("li",[t._v("VCC -> Pin 3V3")]),o("li",[t._v("GND -> Pin GND")]),o("li",[t._v("SCL -> Pin D4 (GPIO2)")]),o("li",[t._v("SDA -> Pin D3 (GPIO0)")])]),o("h2",{attrs:{id:"device-firmware"}},[o("a",{attrs:{href:"#device-firmware","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Device Firmware")]),o("p",[t._v("Download "),o("code",{pre:!0},[t._v("airrohr-flasher")]),t._v(" from the "),o("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("latest release")]),t._v(" for your OS. \nConnect ESP to computer via micro-USB and run flasher. ")]),o("h3",{attrs:{id:"for-linux"}},[o("a",{attrs:{href:"#for-linux","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("For Linux:")]),o("p",[t._v("Firstly you need to add the user to "),o("code",{pre:!0},[t._v("dialout")]),t._v(" group:")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("sudo usermod -a -G dialout $USER\n")])]),o("p",[t._v("Then logout and login or restart computer.")]),o("p",[t._v("Now you can run flasher (don't forget to give it permission to execute):")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("chmod +x airrohr-flasher-linux\n./airrohr-flasher-linux\n")])]),o("h3",{attrs:{id:"for-windows"}},[o("a",{attrs:{href:"#for-windows","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("For Windows:")]),o("p",[t._v("Unpack flasher and run it with double click.\nYou need to install drivers for the USB2serial chipset (Windows 10 should be able to automatically download these):")]),o("ul",[o("li",[t._v("Drivers for NodeMCU v3 (CH340): "),o("a",{attrs:{href:"http://www.wch.cn/downloads/file/5.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Windows")]),t._v(" ("),o("a",{attrs:{href:"https://d.inf.re/luftdaten/CH341SER.ZIP",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("2018/09/04 v3.4 mirror")]),t._v(")")])]),o("h3",{attrs:{id:"for-macos"}},[o("a",{attrs:{href:"#for-macos","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("For MacOS")]),o("p",[t._v("Download flasher and run it.\nYou need to install drivers for the USB2serial chipset: ")]),o("ul",[o("li",[t._v("Drivers for NodeMCU v3 (CH340): "),o("a",{attrs:{href:"http://www.wch.cn/downloads/file/178.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("MacOS")]),t._v(" ("),o("a",{attrs:{href:"https://d.inf.re/luftdaten/CH341SER_MAC.ZIP",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("2018/09/04 v1.4 mirror")]),t._v(")")])]),o("p",[t._v("Choose firmware (English or Russian) and press upload. It will take a few minutes.")]),o("p",[o("g-image",{attrs:{src:n("kJT1"),alt:"flasher"}})],1),o("h2",{attrs:{id:"configuration"}},[o("a",{attrs:{href:"#configuration","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Configuration")]),o("p",[t._v("Reboot your ESP (simply reconnect USB to computer).\nThen connect to airRohr--xxxxxxx Wi-Fi network and in your browser write address 192.168.4.1:")]),o("p",[o("g-image",{attrs:{src:n("fCe+"),alt:"menu"}})],1),o("p",[t._v("Go to Configuration -> Wi-Fi Settings and add the information about your Wi-Fi network:")]),o("p",[o("g-image",{attrs:{src:n("c+7d"),alt:"config"}})],1),o("p",[t._v('Then press "Save configuration and restart" and ESP will be connected to the provided Wi-Fi network.')]),o("p",[o("g-image",{attrs:{src:n("l0MB"),alt:"save"}})],1),o("p",[t._v("Then find ESP in local network (for that your computer and ESP must be in one network). You can do it using airrohr-flasher. Run it, go to the Discovery tab and press Refresh, then you'll be able to see the address.")]),o("p",[o("g-image",{attrs:{src:n("V1ab"),alt:"addr"}})],1),o("p",[t._v("Open ESP local address in your browser, go to "),o("code",{pre:!0},[t._v("APIs")]),t._v(" tab in  "),o("code",{pre:!0},[t._v("Configuration")]),t._v(" and click "),o("code",{pre:!0},[t._v("Robonomics")]),t._v(". ")]),o("p",[o("g-image",{attrs:{src:n("j/wg"),alt:"robonomics"}})],1),o("blockquote",[o("p",[t._v("If you want to send data to your own server, enable "),o("code",{pre:!0},[t._v("Custom API")]),t._v(" and write your address and port ")])]),o("p",[t._v("Then go to "),o("code",{pre:!0},[t._v("Sensors")]),t._v(" tab, enable GPS and put in your coordinates. Also enable the sensors you connected:")]),o("p",[o("g-image",{attrs:{src:n("2wo5"),alt:"gps"}})],1),o("p",[t._v("Then press "),o("code",{pre:!0},[t._v("Save configuration and restart")]),t._v(".")]),o("h2",{attrs:{id:"results"}},[o("a",{attrs:{href:"#results","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Results")]),o("p",[t._v("Go to "),o("a",{attrs:{href:"https://sensors.robonomics.network/#/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("sensors.robonomics.network")]),t._v(", and you will see your sensor on the map.")]),o("p",[o("g-image",{attrs:{src:n("GgVi"),alt:"map"}})],1)])}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof p&&p(h);e.default=h.exports}}]);