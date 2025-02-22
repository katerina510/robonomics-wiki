---
title: Setup SLS Gateway
contributors: [LoSk-p, Fingerling42]
translated: false
---

You can use [SLS Gateway from Robonomics](https://easyeda.com/ludovich88/robonomics_sls_gateway_v01) instead of Xiaomi/Aqara gateways. It works only in your local network and don't send any data to external servers, so you can control all data about your home.

1. Ensure that the switches on the back of the gateway are properly positioned. Switches 5 (RX Zigbee to ESP) and 6 (TX Zigbee to ESP) must be in the ON position, the others must be off. 

2. Connect the type C power cable. The indicator light in the center should turn green.

3. The first time it starts up, the gateway will begin distributing Wi-Fi with the SSID 'zgw****' to set up the SLS gateway connection. Connect to this network. Keep in mind that the signal may be quite weak, so it is best to keep the SLS Gateway closer to your computer. 

4. If the connection is successful, the web interface will open (or you can find it on 192.168.1.1 address). Configure the SLS Gateway to connect to your Wi-Fi by entering the user / pass. After that the gateway's Wi-Fi will shut down. 

5. Find the local IP of the SLS gateway to access the web interface. You can use the command 'arp -a' or 'nmap'. The resulting link should look like this: 'http://192.168.xxx.xxx'.

6. Go to Setting/Hardware and make sure that the settings look like this. Correct the settings if necessary and reboot the gateway:

![sls-hardware](../images/home-assistant/sls-hardware.jpg)

7. Configure automatically adding devices to Home Assistant. Go to `Zigbee/Config` then tick `Home Assistant MQTT Discovery` and `Clear States`:

![sls-hass](../images/home-assistant/sls-hass.png)

8. Connect your devices by going to Zigbee/Join. Press the Enable Join button to connect and put your sensors in pairing mode. 

After that connect it to Home Assistant with the following [guide](/docs/sls-gateway-connect)