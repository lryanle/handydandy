import { QrCode, LoaderPinwheel, Link, Image } from "lucide-react";

export const toollist = [
	{
		icon: QrCode,
		name: "QR Code Generator",
		description: "Create QR codes for any text or URL",
		tags: ["MLH", "Dev"],
	},
	{
		icon: LoaderPinwheel,
		name: "Random Spinning Wheel",
		description: "Make decisions or select random items",
		tags: ["MLH"],
	},
	{
		icon: Link,
		name: "URL List",
		description: "Manage and access your frequently used links",
		tags: ["MLH"],
	},
	{ icon: Image, 
		name: "Image → Favicon", 
		description: "Convert any common image types to a .ico file",
		tags: ["Dev"],
	},
];
