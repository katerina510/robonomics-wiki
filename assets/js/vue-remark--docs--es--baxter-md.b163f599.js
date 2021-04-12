(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"4Mnt":function(o,t,e){o.exports=e.p+"assets/img/working.c2a72d77.jpg"},"53Q/":function(o,t,e){o.exports=e.p+"assets/img/waiting.b2f892d5.jpg"},"9mp+":function(o,t,e){o.exports=e.p+"assets/img/rob_message.e26419da.jpg"},ExEK:function(o,t,e){o.exports=e.p+"assets/img/baxter_simulation.17b89235.jpg"},FC5s:function(o,t,e){o.exports=e.p+"assets/img/datalog.677c61f5.jpg"},"J+Ib":function(o,t,e){"use strict";e.r(t);var r=e("KHd+"),n=e("UQSp"),a=e("Kw5r");function s(o){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},c=function(o){var t=o.options.components=o.options.components||{},e=o.options.computed=o.options.computed||{};Object.keys(i).forEach((function(o){"object"===s(i[o])&&"function"==typeof i[o].render||"function"==typeof i[o]&&"function"==typeof i[o].options.render?t[o]=i[o]:e[o]=function(){return i[o]}}))},l=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Control Baxter robot with robonomics",contributors:["nakata5321","Vourhey"],translated:!1};var u=function(o){o.options[p]&&(o.options[p]=d),a.a.util.defineReactive(o.options,p,d),o.options.computed=l.computed({$frontmatter:function(){return o.options[p]}},o.options.computed)},m=Object(r.a)({},(function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("VueRemarkRoot",[r("p",[o._v("Example of how it works:")]),r("p",[r("a",{attrs:{href:"https://youtu.be/AeufQmaNRWk",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("https://youtu.be/AeufQmaNRWk")])]),r("h2",{attrs:{id:"requirements"}},[r("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),o._v("Requirements:")]),r("ul",[r("li",[o._v("Ubuntu 18.04")]),r("li",[o._v("ROS Melodic + Gazebo (installation manual "),r("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("here")]),o._v(")  ")]),r("li",[o._v("extra packages:")])]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("sudo apt-get install ros-melodic-gazebo-ros-control ros-melodic-effort-controllers ros-melodic-joint-state-controller\n")])]),r("ul",[r("li",[o._v("IPFS 0.4.22 (download from "),r("a",{attrs:{href:"https://dist.ipfs.io/go-ipfs/v0.4.22/go-ipfs_v0.4.22_linux-386.tar.gz",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("here")]),o._v(" and install)")]),r("li",[o._v("pip:")])]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("sudo apt install python-pip\n")])]),r("ul",[r("li",[o._v("ipfshttpclient:")])]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("pip install ipfshttpclient\n")])]),r("ul",[r("li",[o._v("Robonomics node (binary file) (download latest "),r("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("release")]),o._v(" here)")]),r("li",[o._v("Create "),r("strong",[o._v("Baxter")]),o._v(" and "),r("strong",[o._v("Employer")]),o._v(" accounts  on "),r("strong",[o._v("Robonomics Portal")]),r("br"),o._v("\n(you can find tutorial "),r("a",{attrs:{href:"/docs/create-account-in-dapp"}},[o._v('"Create an Account on Robonomics Portal"')]),o._v(" here).")]),r("li",[o._v("IPFS browser extension (not necessary)")])]),r("h2",{attrs:{id:"1-download-baxter-model-and-controller-packages"}},[r("a",{attrs:{href:"#1-download-baxter-model-and-controller-packages","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),o._v("1. Download Baxter model and controller packages")]),r("p",[o._v("Download packages:")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("cd ~\nmkdir -p robot_ws/src\ncd robot_ws/src\ngit clone https://github.com/nakata5321/Baxter_simulation_controller.git\ncd Baxter_simulation_controller\ngit checkout old_version\ncd ../..\ncatkin build\n")])]),r("p",[o._v("Dont forget to add source command:")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v('echo "source /home/$USER/robot_ws/devel/setup.bash" >> ~/.bashrc\nsource ~/.bashrc\n')])]),r("h2",{attrs:{id:"2-create-simulation-world"}},[r("a",{attrs:{href:"#2-create-simulation-world","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),o._v("2. Create simulation world")]),r("p",[o._v("Let's start gazebo world and put our baxter in it:")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("roslaunch gazebo_ros empty_world.launch\n")])]),r("p",[r("img",{attrs:{src:e("SCgq"),alt:"empty world"}})]),r("p",[o._v("Open one more window in terminal:")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("rosrun gazebo_ros spawn_model -file `rospack find baxter_description`/urdf/baxter.urdf -urdf -z 1 -model baxter\n")])]),r("p",[o._v("You can put some models in front of our baxter. It will be more intresting.\n"),r("img",{attrs:{src:e("ExEK"),alt:"baxter"}})]),r("h2",{attrs:{id:"3manage-accounts-in-dapp"}},[r("a",{attrs:{href:"#3manage-accounts-in-dapp","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),o._v("3.Manage accounts in DAPP")]),r("p",[o._v("Since we are testing, let us create a local robonomics network with robonomics binary file. Go to folder with robonomics file and run:")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("./robonomics --dev --rpc-cors all\n")])]),r("p",[r("img",{attrs:{src:e("nZX3"),alt:"robonomics"}})]),r("p",[o._v("Don't forget to remove "),r("code",{pre:!0},[o._v("db")]),o._v(" folder after every launch:")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("rm -rf /home/$USER/.local/share/robonomics/chains/dev/db\n")])]),r("p",[o._v("Go to "),r("a",{attrs:{href:"https://parachain.robonomics.network",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("https://parachain.robonomics.network")]),o._v(" and switch to local node\n"),r("img",{attrs:{src:e("jhCo"),alt:"local node"}})]),r("p",[o._v("Go to Accounts and transfer some money to "),r("strong",[o._v("Baxter")]),o._v(" and "),r("strong",[o._v("Employer")]),o._v(" accounts.")]),r("p",[o._v('You can find The manual "Create an Account on Robonomics Portal" '),r("a",{attrs:{href:"/docs/create-account-in-dapp"}},[o._v("here.")])]),r("p",[o._v("Add Baxter's secret key and adress to "),r("code",{pre:!0},[o._v("configuration.txt")]),o._v(" in "),r("code",{pre:!0},[o._v("robot_ws/src/robot_controller/src/")])]),r("h2",{attrs:{id:"4start-simulation"}},[r("a",{attrs:{href:"#4start-simulation","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),o._v("4.Start simulation")]),r("p",[o._v("In new window run:")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("ifps init #you only need to do this once\nipfs daemon\n")])]),r("p",[o._v("Open separate terminal and start "),r("em",[o._v("controller package")]),o._v(":")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v("rosrun robot_controller robot_control.py\n")])]),r("p",[r("img",{attrs:{src:e("53Q/"),alt:"waiting"}})]),r("p",[o._v("Return to the first terminal, open new window and send command to "),r("a",{attrs:{href:"/docs/rio-overview"}},[r("strong",[o._v("robonomics io")])]),o._v(". This command will turn ON your robot:")]),r("pre",[r("code",{pre:!0,attrs:{class:"language-sh"}},[o._v('echo "ON" | ./robonomics io write launch -r <CURIOSITY ADDRESS> -s <EMPLOYER’S KEY>\n')])]),r("p",[o._v("Where "),r("code",{pre:!0},[o._v("<CURIOSITY ADDRESS>")]),o._v(" and "),r("code",{pre:!0},[o._v("<EMPLOYER’S KEY>")]),o._v(" are replaced with previously saved strings accordingly")]),r("p",[r("img",{attrs:{src:e("9mp+"),alt:"rob_message"}})]),r("p",[o._v("You should see the following:")]),r("p",[r("img",{attrs:{src:e("4Mnt"),alt:"working"}})]),r("p",[o._v("when the work is over go to the Robonomics Portal to "),r("code",{pre:!0},[o._v("Developer > Chain state")]),o._v(". Choose "),r("em",[o._v("datalog")]),o._v(" in "),r("strong",[o._v("state query")]),o._v(' and add Baxter datalog message using "+" button.')]),r("p",[r("img",{attrs:{src:e("FC5s"),alt:"datalog"}})]),r("p",[o._v("Now the IPFS hash of the telemetry and photos is saved in the blockchain. To see the data simply copy the hash and insert it in IPFS Companion:")]),r("p",[r("img",{attrs:{src:e("b5cV"),alt:"ipfs"}})]),r("p",[o._v("Click  "),r("strong",[o._v("View on Gateway")]),o._v(" and that's all!")]),r("p",[r("img",{attrs:{src:e("xuxU"),alt:"result1"}}),r("img",{attrs:{src:e("M6Zx"),alt:"result2"}})])])}),[],!1,null,null,null);"function"==typeof c&&c(m),"function"==typeof u&&u(m);t.default=m.exports},M6Zx:function(o,t,e){o.exports=e.p+"assets/img/result2.bc04ab47.jpg"},SCgq:function(o,t,e){o.exports=e.p+"assets/img/empty_world.6c71b443.jpg"},UQSp:function(o,t,e){"use strict";t.a={name:"VueRemarkRoot",render:function(o){return o("div",null,this.$slots.default)}}},b5cV:function(o,t,e){o.exports=e.p+"assets/img/ipfs.6b7fe2b9.jpg"},jhCo:function(o,t,e){o.exports=e.p+"assets/img/local_node.93af06c2.jpg"},nZX3:function(o,t,e){o.exports=e.p+"assets/img/robonomics.ca4f6ba1.jpg"},xuxU:function(o,t,e){o.exports=e.p+"assets/img/result1.af0479dc.jpg"}}]);