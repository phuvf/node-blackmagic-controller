const { listBlackmagicControllers, VENDOR_ID } = require('../dist/index')
const HID = require('node-hid')

console.log('RAW HID')
for (const dev of HID.devices()) {
	if (dev.vendorId !== VENDOR_ID) continue
	console.log(dev)
}

console.log('BLACKMAGIC CONTROLLERS')
listBlackmagicControllers().then((devs) => {
	for (const dev of devs) {
		console.log(dev)
	}
})
