
const Faults = {};
Faults.commonFaults = 
[
    {
        "type": "common",
        "name": "Slow Phone",
        "fault": "This is something that everybody has experienced at least once. It is the most common mobile phone issue and it can be associated with old phones. However, newer devices can present the same problem. When your Random-Access Memory (RAM) is full of apps and files that you do not use or need, your phone tends to respond slowly.",
        "solution": "Clean your cell phone and close/delete apps, files and clear the cache data. If you recently installed an app and your phone is not working well, you should uninstall it and see if your mobile phone runs faster. If this does not help you, you can also try saving important information on Google Drive, Dropbox or just on your computer. Then, you can restore your cell phone to factory data.",
        "placeHolder": "",
        "image": ""
    },
    {
        "type": "",
        "name": "",
        "fault": "",
        "solution": "",
        "placeHolder": "",
        "image": ""
    }
];

Faults.brand = 
[
    {
        name: "Android",
        banner: "android-banner.jpg",
        desc: "These common problems have easy workarounds and fixes.",
        faults: [
            {
                name: "Extremely rapid battery drain",
                longName: "Extremely rapid battery drain",
                image: "android1.webp",
                shortDesc: "You’ll find users complaining about rapid battery drain with almost every smartphone.",
                longDesc: "You’ll find users complaining about rapid battery drain with almost every smartphone. This can range from battery drain when the phone is on standby to when certain apps are proving to be a battery hog. Keep in mind that you can expect a faster than normal battery drain in some situations. These include when using the phone for navigation, taking many pictures or shooting videos, while playing games, or when setting up a phone for the first time.",
                solution: [
                    "For quite a few users, a third-party app ended up being the cause. To see if that’s the case for you, boot the device in Safe Mode (you can find the instructions on how to do so below). Charge the phone to a point above the discharge percentage. Wait for the battery to drain until it gets below that number again. If the phone works as expected with no early shutdown, an app is behind the issue. Remove recently installed or updated apps until the problem goes away. If you can’t figure it out manually, you may need to perform a complete factory reset.",
                    "It could also be a hardware issue for some due to the degradation of Li-ion batteries. This is more common if the phone is more than a year old or refurbished. The only option here is to contact the device manufacturer and try and get the phone repaired or the battery replaced.",
                ]
            },
            {
                name: "Device doesn’t wake",
                image: "android2.webp",
                longName: "The device doesn’t wake up when the power button is pressed",
                shortDesc: "The “forced sleep” bug is quite common and has been a problem for numerous devices.",
                longDesc: "The “forced sleep” bug is quite common and has been a problem for numerous devices. When the screen is off, it doesn’t wake up when the power button is pressed. Instead, users have to press and hold the power button for ten seconds and force a restart.",
                solution: [
                    "The forced restart will fix the problem, at least temporarily. However, this isn’t a long-term solution, and only an upcoming software update will permanently fix this issue. There are some workarounds, though.",
                    "Some users have found that a screen protector, particularly of the tempered glass variety, causes the problem. Removing the screen protector helps but isn’t an ideal option.",
                    "Enabling ” Always On Display ” on some phones with this feature helps fix it.",
                    "De-activating the Active Edge feature on Pixel phones with the feature is a helpful workaround.",
                    "Some phones let you change what the power button is used for and add extra functionality, like launching the Google Assistant. This could also be an issue with the settings. Go into the device settings and ensure that everything is how it should be."
                ]
            },
            {
                name: "SIM card isn’t detected",
                image: "android3.webp",
                longName: "SIM card isn’t detected",
                shortDesc: "The SIM card isn’t being detected by the phone. Getting a replacement SIM card doesn’t help fix the problem.",
                longDesc: "The SIM card isn’t being detected by the phone. Getting a replacement SIM card doesn’t help fix the problem.",
                solution: [
                    "Simply rebooting the phone has worked for some users. In most cases, though, the issue seems to go away only for a few minutes.",
                    "Some users have found that activating mobile data even when on a Wi-Fi connection helps fix the problem. Of course, this solution is great only for those with a good data plan, and you will have to stay on top of data usage if the Wi-Fi connection drops. You get charged for using data, so using this workaround without a data package isn’t recommended.",
                    "There’s another workaround if you have a phone with an eSIM. Dial *#*#4636#*#* to open network settings. It might take a couple of attempts. Tap on Phone Information. In the network settings section, change the setting to one that works. Instead of trial and error, you can also find out the correct option by contacting your network carrier. If your phone supports dual SIMs, ensure that DSDS enabled is active."
                ]
            },
            {
                name: "Google app battery drain",
                image: "android4.webp",
                longName: "Google app causing a lot of battery drain",
                shortDesc: "Some users have found that the Google app is responsible for the bulk of battery usage on their devices.",
                longDesc: "Some users have found that the Google app is responsible for the bulk of battery usage on their devices. This is an issue that shows up quite frequently and across various phones. It seems to be an increasingly common problem with Android in recent years.",
                solution: [
                    "Go to Settings–>Apps & notifications and open the list of apps. Scroll down to the Google app and tap on it. Tap on “Storage & cache” and clear both.",
                    "In the previous menu, tap on “Mobile data & Wi-Fi.” You can disable “background data usage” and “unrestricted data usage” and enable “Disabled Wi-Fi” and “Disabled data usage.” This will affect app behavior, though, and the Google app and its features (like the Assistant) will not work as expected. Do these steps only if the battery drain makes the phone unusable.",
                    "This problem seems to come and go with software updates. So if you are facing this issue, an upcoming app update will likely fix it."
                ]
            },
            {
                name: "Charging issues",
                image: "android5.webp",
                longName: "Charging issues",
                shortDesc: "People face a lot of problems when it comes to the cables and chargers that come with a phone.",
                longDesc: "People face a lot of problems when it comes to the cables and chargers that come with a phone. This can range from slow charging speeds to not being able to transfer files from a PC and more.",
                solution: [
                    "This might just be a problem with the charging cable itself. Make sure it works by charging other phones or devices. If the cable doesn’t work with anything, you will have to get a new cable.",
                    "These issues are particularly prevalent with USB-C to USB-C cables. Some have found that using a USB-C to USB-A cable instead solves the problem. Of course, if you’re charger uses the former, you’ll need to get an alternate to use the latter type of cable with.",
                    "For quite a few users, cleaning the USB-C port seems to do the trick. Fold a business card and gently clean out the port with a sharp edge. You can also use compressed air as long as the pressure intensity isn’t too high.",
                    "An app could also be causing these issues. Boot the device in Safe Mode and see if the problem persists. If not, an app is creating the problem.",
                    "If nothing seems to work, the USB port of the phone might be damaged. The only option then is to get the device repaired or replaced.",
                    "If your phone isn’t charging as fast as it’s supposed to, it could be a compatibility issue with the charger. Many manufacturers aren’t including chargers in the box anymore. It’s still best to buy a first-party charger to get the fastest charging speeds possible. Some OEMs like OnePlus and Oppo use proprietary fast charging."
                ]
            },
            {
                name: "Performance issues",
                image: "android6.webp",
                longName: "Performance issues",
                shortDesc: "If you find your phone running slowly, is laggy, or takes a long time to respond, there are a few general troubleshooting steps you can go through.",
                longDesc: "If you find your phone running slowly, is laggy, or takes a long time to respond, there are a few general troubleshooting steps you can go through. A lot of the steps mentioned below can often help with battery drain issues as well. Performance and battery problems are seemingly always going to be a part of Android OS.",
                solution: [
                    "Simply restarting your phone often does the trick.",
                    "Make sure that the software is up to date. Go to Settings > System > Advanced > System update. Also, update all the apps you’ve downloaded from the Google Play Store.",
                    "Check your phone’s storage. You might start seeing some slowdown when the amount of free storage is less than 10%.",
                    "Check and ensure that third-party apps aren’t causing a problem by booting in Safe Mode and seeing if the problem persists.",
                    "If you find a lot of apps running in the background and causing problems with battery life and performance, you might need to force stop them. Go to Settings > Apps & notifications and open the list of apps. Find the app and then tap on “Force Stop.”",
                    "If nothing else works, performing a complete factory reset might be the only way to go."
                ]
            },
            {
                name: "Connectivity issues",
                image: "android7.webp",
                longName: "Connectivity issues - Wifi",
                shortDesc: "You may occasionally come across connectivity problems with Wi-Fi and Bluetooth.",
                longDesc: "You may occasionally come across connectivity problems with Wi-Fi and Bluetooth. While some devices have specific Android problems when it comes to connectivity, below are a few general steps you can try out first.",
                solution: [
                    "Go to Settings > Power saving and ensure that this option is turned off.",
                    "Redo the Wi-Fi connection. Go to Settings > Wi-Fi, long press on the connection name, and tap on “Forget.” Now re-enter the details and try again.",
                    "Make sure the Wi-Fi router firmware is up to date.",
                    "Make sure the applications and software on the device are up to date.",
                    "Go into Wi-Fi > Settings > Advanced and make a note of your device’s MAC address, then make sure that it is allowed access in the router’s MAC filter."
                ]
            },
            {
                name: "Bluetooth issues",
                image: "android7.webp",
                longName: "Connectivity issues - Bluetooth",
                shortDesc: "You may occasionally come across connectivity problems with Wi-Fi and Bluetooth.",
                longDesc: "You may occasionally come across connectivity problems with Wi-Fi and Bluetooth. While some devices have specific Android problems when it comes to connectivity, below are a few general steps you can try out first.",
                solution: [
                    "With issues when connecting to the car, check the manufacturer’s manual for the device and the car and reset your connections.",
                    "Ensure that you are not missing a vital part of the connection process. Some Bluetooth devices have unique instructions.",
                    "Go to Settings > Bluetooth and ensure nothing needs changing.",
                    "Go into Settings > Bluetooth and delete all prior pairings and try setting them up again from scratch. Don’t forget to also delete any devices on this list that you no longer connect to.",
                    "When it comes to issues with multiple device connections, only a future update will be able to address this problem."
                ]
            },
            {
                name: "Android Auto problems",
                image: "android8.webp",
                longName: "Android Auto problems",
                shortDesc: "Complaints about connectivity issues with Android Auto are extremely common, particularly with new phones.",
                longDesc: "Complaints about connectivity issues with Android Auto are extremely common, particularly with new phones.",
                solution: [
                    "Samsung, OnePlus, Google, and others make it very easy to set up a new phone while retaining the settings, apps, and files from the older device. However, if you use apps like OnePlus Switch or similar, it usually causes problems with Android Auto. Go to the Google Play Store, find Android Auto, uninstall it and install it again. Start the connection process from the beginning.",
                    "The Android Auto app won’t be in your app drawer anymore. Instead, it is tucked away in your Settings menu. It’s located in different places depending on your phone, so the best option is to open Settings and search for Android Auto. Make sure that the settings are the way you want.",
                    "A bad cable might be causing frequent disconnections. Use another cable to see if the problem goes away.",
                    "If you use Android Auto Wireless, you might have trouble with the car recognizing your phone the first time. Users say that setting the initial connection with a cable and then using Android Auto Wireless after seems to do the trick."
                ]
            },
            {
                name: "Gesture malfunction",
                image: "android9.webp",
                longName: "Gesture navigation not working",
                shortDesc: "Most phones running Android come with gesture navigation.",
                longDesc: "Most phones running Android come with gesture navigation. However, users complain about gesture navigation freezing, being slow, or being unresponsive.",
                solution: [
                    "Some users have found a simple workaround to fix this problem. Find the gesture navigation setting on your phone. On a Google phone, you can find it by going to  Settings–>System–>Gesture. Change it to the three-button navigation option. Restart the phone and then switch the setting back to gesture navigation.",
                    "It might be a launcher issue, particularly if you use third-party launchers. Go to Settings–>Apps and notifications–>See all apps (the steps might be different). Find the launcher app, tap on Clear cache, and restart the phone.",
                    "A rogue app might be causing problems with gesture navigation. Boot the phone into Safe Mode (the instructions are below) and check if the issue persists. If it doesn’t, then an app is the issue. Uninstall any recently installed or updated apps. If you can’t find the culprit, you might have to perform a factory reset."
                ]
            },
            {
                name: "Google Play Store",
                image: "android10.webp",
                longName: "Google Play Store not working",
                shortDesc: "The Google Play Store is the key to all your apps on your Android phone.",
                longDesc: "The Google Play Store is the key to all your apps on your Android phone. Unfortunately, it doesn’t always work as expected.",
                solution: [
                    "Sometimes a simple force close is all you need when you have issues with the Google Play Store not working! You can do this by simply swiping away the Google Play Store on your multitasking app switcher. Or you could also do it through the Settings.",
                    "Not sure how much this one works, but I have heard plenty of people say that switching Airplane Mode on and then off will help the Google Play Store get back on track. Hey, it’s not a complicated process, and it’s safe. Why not try, right?",
                    "Just like with Airplane Mode, Wi-Fi could be the issue. Not to mention, your network may very well be having simple connection issues. Toggle Wi-Fi on and off, and play around with the Google Play Store for a few. It just might help.",
                    "Restart your router. Some routers allow restarts to be triggered through an app, while others may have a physical button. If yours has neither, you can unplug the router’s power source and plug it back in.",
                    "Restart your phone. Something as simple as a reboot might do the trick. We’ve found that doing this will solve most simple smartphone problems. This will take a minute or two and might work.",
                    "Cache memory is an incredible tool. The phone can reduce data usage and speed up loading times by storing data locally. This data would otherwise need to be downloaded every time you access a page, which is unnecessary if there are no changes. The bad part is that sometimes older data can pile up, and it can also misbehave. This is why it’s good to clear cache from time to time.",

                ]
            }
        ]
    },
    {
        name: "General",
        banner: "general.webp",
        desc: "",
        faults: [
            {
                name: "Cracked Screen",
                image: "general1.webp",
                longName: "Cracked Screen",
                shortDesc: "Your phone screen can get cracked, even from a slight fall from your hand, or when placed in your pocket alongside a small pointed object. In most cases, you don't necessarily need to hastily replace your phone screen when it gets cracked.",
                longDesc: "Your phone screen can get cracked, even from a slight fall from your hand, or when placed in your pocket alongside a small pointed object. In most cases, you don't necessarily need to hastily replace your phone screen when it gets cracked. A proper check can help you spot if the screen is merely cracked or broken. If it isn't a hard fall or deep crack, you may wonder how to fix a cracked phone screen at home.",
                solution: [
                    "Do you have to take the risk of fixing your phone screen when you can use reliable means? Certainly, no. It's suitable to approach a professional repairer to fix a cracked phone screen or consult your device manufacturer to fix a broken phone screen.",
                    "If you have insurance on your phone, then it’s definitely worth getting in touch with your manufacturer (or service provider if you got the phone as part of a contract) to see how much it’s going to cost. But be prepared — it’s still pretty expensive."
                ]
            },
            {
                name: "Phone Is Not Charging",
                image: "general2.jpeg",
                longName: "Phone Is Not Charging",
                shortDesc: "There are a few reasons why your phone may not be charging. ",
                longDesc: "There are a few reasons why your phone may not be charging. A faulty case can be one reason. But, more commonly, the other reasons include a warped or broken charging port or a faulty cable.",
                solution: [
                    "The first thing to do in this situation is to try another charging cable or charging adapter. Sometimes the wires in the cable/adapter are bent or broken and won’t let the electricity flow through. I have found on several occasions that a new cable fixed my problems. To avoid this problem in the future, make sure you store your cables correctly and don’t bend them.",
                    "If this has not fixed your problem, there’s likey a problem with your charging port. Often this is because the port and the connector are not making enough contact for the electricity to pass through. A replacement is needed",

                ]
            },
            {
                name: "Failing Battery",
                image: "general3.jfif",
                longName: "Failing Battery",
                shortDesc: "A failing battery can be a reason your phone is not charging efficiently or dying off faster than the characters in Game Of Thrones.",
                longDesc: "A failing battery can be a reason your phone is not charging efficiently or dying off faster than the characters in Game Of Thrones. <br> Before you can jump to the conclusion that your battery is the problem, it’s worth seeing if your phone is stuck on power-inefficient settings. Certain apps, searching for Wi-Fi networks and leaving your Bluetooth on are just some of the processes that can drain your battery in a matter of minutes. ",
                solution: [
                    "If you really do have a problem with your battery, you’ll need to replace it. For most phones this is a pretty simple task. Most Samsungs, HTCs, Motorolas, Nokias etc. will open easily and you can replace the battery yourself. Genuine parts can be purchased through the manufacturer.",
                    "Alternatively, places like Computer Village will have batteries that fit your phone but, they may not necessarily be genuine parts. Using these may void your warranty. The best (and easiest way) to find out is to call your manufacturer’s customer service line.",
                    
                ]
            },
            {
                name: "Camera Lens Is Broken Or Hazy",
                image: "general4.webp",
                longName: "Camera Lens Is Broken Or Hazy",
                shortDesc: "If you have a hazy or scratched camera lens, the very first thing I would do is give it a really, really good clean.",
                longDesc: "If you have a hazy or scratched camera lens, the very first thing I would do is give it a really, really good clean. You’d be surprised how much of a difference that can make. And don’t just give it a quick wipe with a cloth. Get out the methylated spirits or spray and wipe and really make sure it’s clean.",
                solution: [
                    "What you really need to do is have the lens replaced. This is the one instance that you should probably cough up the extra cash and make sure it’s repaired properly by your manufacturer. When it comes to a camera lens, quality is everything. There are many reputable third parties that will do this too. And there are also ways you can do this yourself, but I would advise against this unless you’re an expert.",
                    
                ]
            },
            {
                name: "Faulty Power Switch",
                image: "general5.jpg",
                longName: "Faulty Power Switch",
                shortDesc: "You’re going to need to get this one repaired.",
                longDesc: "You’re going to need to get this one repaired.",
                solution: [
                    "Contact your manufacturer or go through a third party repairer.",
                    
                ]
            },
            {
                name: "Audio IC",
                image: "general6.webp",
                longName: "Audio IC",
                shortDesc: "It’s widely believed the problem is ultimately due to the phone bending at",
                longDesc: "It’s widely believed the problem is ultimately due to the phone bending at a weak point which happens to be where the audio IC is located, along with a couple of other important chips.",
                solution: [
                    "Visit a nearby service repairer",
                    
                ]
            },
            {
                name: "Display IC",
                image: "general7.jpg",
                longName: "Faulty Display IC",
                shortDesc: "The display lights problem of Android mobile comes from three places <br> The first reason is that the Supply light from the IC arrives at the display light, the supply line becomes problematic when the supply line is missing somewhere",
                longDesc: "The display lights problem of Android mobile comes from three places <br> The first reason is that the Supply light from the IC arrives at the display light, the supply line becomes problematic when the supply line is missing somewhere <br> The display light section does not reach the power supply <br> The display light issue occurs when a component of the display light section is worsened.",
                solution: [
                    "Visit a nearby service repairer",
                    
                ]
            },
            {
                name: "Flash Light",
                image: "general8.webp",
                longName: "Flash Light Problem",
                shortDesc: "Smartphones are made up of a combination of software & hardware and most times a faulty phone",
                longDesc: "Smartphones are made up of a combination of software & hardware and most times a faulty phone flashlight is caused by a software error. Whether it’s caused by a software error or faulty hardware, the solutions below can help you fix your faulty flashlight on Android.",
                solution: [
                    "Setting your device to power saver mode disables some functions like background data usage, Vibration, and sometimes torchlight. These functions are disabled in order to make your phone battery last longer before it runs out. Turn off Power saver mode to make your flashlight working again. To turn off power saver mode; Go to SETTINGS >>> BATTERY SAVER >>> Tap the 3 dots at the Top right corner >>> TURN IT OFF.",
                    "Applications that make use of your phone camera are sometimes infected with malware that hinders the flashlight from working. Uninstall the app that you recently installed and restart your phone to solve the phone torch",
                    "Your camera’s settings may have been disrupted while it was being used. Clear the camera app data to return your camera to its default settings and make flashlight work  To clear camera app data; Go to SETTINGS >>> APPLICATION MANAGER >>> ALL >>> CAMERA >>> CLEAR DATA.",
                    "You can also use another flashlight app if your default flashlight switch is not working. Visit the app store and type ‘Flashlight’ in the search bar >>> Download your preferred flashlight app from the search results.",
                    "If after trying all the solutions above and your phone flashlight is still not working, we recommend that you Factory reset your phone in order to clear any software irregularities that is stopping your flashlight from working. To Factory reset your phone; Go to SETTINGS >>> SYSTEM SETTINGS >>> BACKUP & RESET >>> FACTORY DATA RESET >>> RESET PHONE >>> INSERT PASSWORD >>> ERASE EVERYTHING.",
                    "Visit a nearby repairer"
                    
                ]
            }
        ]
    },
    {
        name: "Windows",
        banner: "windows-phone.webp",
        desc: "",
        faults: [
            {
                name: "Black screen",
                image: "window1.webp",
                longName: "Black screen during calls",
                shortDesc: "A lot of few people have encountered persistent problems with their screen going black whenever they make or receive a call on their Windows Phone 8 device.",
                longDesc: "A lot of few people have encountered persistent problems with their screen going black whenever they make or receive a call on their Windows Phone 8 device. This makes it unresponsive, so it’s difficult to cancel or end the call.",
                solution: [
                    "If you tap the Power button twice the screen should blink back to life, but you may have to act quickly to end the call.",
                    "This is likely an issue with the proximity sensor. Make sure that you don’t have a screen protector covering it. It’s located next to the front-facing camera at the top of the phone.",
                    "You should also make sure there’s no dirt covering it. Give it a wipe or try using compressed air on the top edge to blast any dust away.",
                    "Some people have reported success by pushing on the screen where the proximity sensor is located.",
                    "You could ask for a replacement unit, although some people have encountered the same issue on more than one device."
                ]
            },
            {
                name: "Camera not working",
                image: "window2.jpg",
                longName: "",
                shortDesc: "Some people have had problems with their camera on their Windows Phone 8 device.",
                longDesc: "Some people have had problems with their camera on their Windows Phone 8 device. In some cases, the camera button and camera app icon simply don’t seem to trigger anything. In other cases, a message will appear about the camera failing to initialize.",
                solution: [
                    "Try pressing and holding the camera button for a couple of seconds and see if that starts it.",
                    "Press and hold the volume down button and the power button together for 10 seconds. Your phone will restart and the camera should be working again, but the problem might reoccur.",
                    "Make sure that your software is up to date; check your device manufacturer’s website.",
                    "Back up any important files and reset your phone via Settings > About > Reset your phone.",
                    "If the problem persists, then it’s time to talk to your retailer, carrier, or manufacturer about a replacement handset."
                ]
            },
            {
                name: "Duplicate songs",
                image: "window3.jpg",
                longName: "Duplicate songs",
                shortDesc: "A lot of people have run into issues with their music collections on Windows Phone 8 devices.",
                longDesc: "A lot of people have run into issues with their music collections on Windows Phone 8 devices. Sometimes songs appear twice, or even three times. If you look in the folder on your phone there will only be one track, but in the music app you’ll see multiple copies. Unfortunately, this can be a tricky problem to solve.",
                solution: [
                    "A few people have found that turning off Xbox Music cloud collection helps. Go to Start > Music + Videos > More > Settings and turn off Xbox Music cloud collection.",
                    "Make sure that you have a complete back up of your music collection.",
                    "Now delete all of the music on your phone and on your SD card.",
                    "Make sure that you back up anything precious on your phone and reset it via Settings > About > Reset your phone.",
                    "Put the SD card into your PC and reformat it.",
                    "Create a folder called Music on the blank card and manually drag and drop all the music you want into that folder.",
                    "Now put the SD card back into your phone and wait for it to update.",
                    "When you want to add new tracks take the SD card out of the phone and put it in your computer and drag and drop the new track into the folder, then put the card back in your phone."
                ]
            },
            {
                name: "Volume won’t change",
                image: "window5.jpg",
                longName: "Volume won’t change",
                shortDesc: "There have been a lot of reports about people listening to music and finding that they are unable to change the volume using the volume buttons during a specific track – the volume doesn’t change until the track has ended. ",
                longDesc: "There have been a lot of reports about people listening to music and finding that they are unable to change the volume using the volume buttons during a specific track – the volume doesn’t change until the track has ended. This bug also impacts ringtones, which no longer fade the music in and out when a call comes in. Some users also report generally low volume which they are unable to increase.",
                solution: [
                    "Restart the device. Press and hold the Power button for 10 seconds and then tap it to turn the phone back on. The problem should be temporarily gone.",
                    "Low volume that won’t change is generally associated with a specific app. Use an alternative and you shouldn’t have the same problem."
                ]
            },
            {
                name: "Random rebooting",
                image: "window4.jpg",
                longName: "Random rebooting",
                shortDesc: "Phone rebooting random times.",
                longDesc: "The issue seemed to be common on the HTC 8X and Nokia Lumia 920, although it didn’t affect every handset. The smartphones would simply reboot without warning. There was also some suggestion that a syncing problem was related.",
                solution: [
                    "It’s always worth trying a restart. Press and hold the Power button and then slide down when you see Slide down to power off. Turn it back on again and see if the problem repeats. You could also try removing the battery and replacing it.",
                    "Your only other option is to try a factory reset. Make sure you backup first by going to App list > Settings > Backup and choose App list + settings and then Back up now. Then go to About > Reset your phone and tap Yes and Yes again when prompted."
                ]
            },
            {
                name: "Fast battery drain",
                image: "windows6.webp",
                longName: "Fast battery drain",
                shortDesc: "Some users have complained that their WP8 device is running out of battery juice very quickly.",
                longDesc: "Some users have complained that their WP8 device is running out of battery juice very quickly. This could be caused by poorly optimized apps, syncing problems, or something else entirely. There are a few things worth trying to see if you can solve the issue.",
                solution: [
                    "Try uninstalling and reinstalling the Skype and Facebook apps. Some users have reported both apps as major battery hogs, but insist that uninstalling and reinstalling results in improved performance.",
                    "A number of apps have been cited as potential drains including Nokia Drive Beta, various messenger and music apps, and even some games. Nokia advised people to exit apps using the back button so that they close rather than continue to run in the background. You can also go to Settings > Applications > Background tasks and block any apps you don’t want running in the background."
                ]
            },
            {
                name: "Phone won’t charge",
                image: "window7.jpg",
                longName: "Phone won’t charge or doesn’t stay charged",
                shortDesc: "Some people have reported being unable to charge their phones.",
                longDesc: "Some people have reported being unable to charge their phones. When plugging them in, they charge as expected, but when unplugged, the battery drops to where it was before the charging began.",
                solution: [
                    "Let your phone run down its battery until completely empty and the phone turns off. Attempt to charge the phone once again to see if it keeps a charge.",
                    "Back up your important data, media, settings, etc, then perform a factory reset. Charge the phone again to see if it holds a charge. If it does, restore your phone to see if the problem returns.",
                    "If the battery or charging problem returns after trying the above, it may be a hardware issue specifically tied to your battery. Reach out to your carrier or Microsoft Support to organize a repair or a replacement device."
                ]
            }
        ]
    },
    {
        name: "iPhone",
        banner: "iphone-camera-featured.webp",
        desc: "When it comes to delivering smooth and seamless performance, iPhones undoubtedly stand out from the rest. But that doesn’t mean Apple’s much-talked-about smartphone hasn’t had its fair share of issues. Luckily, there are some handy tips and tricks that can fix common iPhone problems.",
        faults: [
            {
                name: "Wifi Is Not Getting Connected",
                image: "iphone1.jpg",
                longName: "Wifi Is Not Getting Connected",
                shortDesc: "Wifi Is Not Getting Connected or iPhone Wi-Fi is slow one among common iPhone problems and solutions encountered by many users.",
                longDesc: "Wifi Is Not Getting Connected or iPhone Wi-Fi is slow one among common iPhone problems and solutions encountered by many users. The solution is really very simple. You just need to simply switch it off and then restart the phone.",
                solution: [
                    "Wifi Is Not Getting Connected or iPhone Wi-Fi is slow one among common iPhone problems and solutions encountered by many users. The solution is really very simple. You just need to simply switch it off and then restart the phone.",
                    "Simultaneously press and hold the home button and lock button till you get the Apple logo on the screen. Once the phone has restarted, you should be able to connect to Wifi. If still the issues persist, go to Settings, then go to WiFi and scroll down to the page end, make the HTTP proxy to auto settings.",
                ]
            },
            {
                name: "Cellular Connection",
                image: "iphone2.webp",
                longName: "Cellular Connection Not Working on iPhone",
                shortDesc: "There could be multiple reasons why a cellular connection may not be working on your iPhone.",
                longDesc: "There could be multiple reasons why a cellular connection may not be working on your iPhone.",
                solution: [
                    "There could be multiple reasons why a cellular connection may not be working on your iPhone.",
                    "For instance, the problem could be due to an outage and network related issues on your iPhone. So, whenever you face this issue, ensure that there is a stable cellular connection and that there is no outage in your area.",
                ]
            },
            {
                name: "Cellular Connection Not Working",
                image: "iphone3.jpg",
                longName: "Cellular Connection Not Working",
                shortDesc: "If the problem continues, you can reset the network settings to get rid of the sluggish network.",
                longDesc: "If the problem continues, you can reset the network settings to get rid of the sluggish network.",
                solution: [
                    "If the problem continues, you can reset the network settings to get rid of the sluggish network. To do so, go to the Settings app on your device and choose General.",
                    "Now, tap on Reset and select Reset Network Settings. Once you have successfully reset the network, check out if the problem has been solved."
                ]
            },
            {
                name: "iPhone is Stuck at Apple Logo",
                image: "iphone4.jfif",
                longName: "iPhone is Stuck at Apple Logo",
                shortDesc: "One of the most common problems that a large number of iPhone users have to deal with is the iPhone is stuck at Apple logo issue.",
                longDesc: "One of the most common problems that a large number of iPhone users have to deal with is the iPhone is stuck at Apple logo issue.",
                solution: [
                    "One of the most common problems that a large number of iPhone users have to deal with is the iPhone is stuck at Apple logo issue.",
                    "Fortunately, a force restart mostly works in fixing this problem. So, if your smartphone ever runs into it, hard reset your device."
                ]
            },
            {
                name: "Hard reset your device",
                image: "iphone5.webp",
                longName: "Hard reset your device",
                shortDesc: "Hard Reset iPhone 8 or Later: Press the volume up button.",
                longDesc: "Hard Reset iPhone 8 or Later: Press the volume up button. Then, press the volume down button. Now, hold down the side button until you see the Apple logo on the screen.",
                solution: [
                    "Hard Reset iPhone 8 or Later: Press the volume up button. Then, press the volume down button. Now, hold down the side button until you see the Apple logo on the screen.",
                    "Hard Reset iPhone 7/7 Plus: Press and hold the side button and the volume down button at once for a few seconds until the Apple logo shows up.",
                    "Hard Reset iPhone 6s or earlier: Hold down the home button and power button simultaneously for a few seconds until the Apple logo appears.",
                ]
            },
            {
                name: "iPhone App Freezing/Crashing Randomly",
                image: "iphone6.webp",
                longName: "iPhone App Freezing/Crashing Randomly",
                shortDesc: "Frankly speaking, apps freezing and crashing is the sort of problem that most of us have come across sometime or the other.",
                longDesc: "Frankly speaking, apps freezing and crashing is the sort of problem that most of us have come across sometime or the other.",
                solution: [
                    "Frankly speaking, apps freezing and crashing is the sort of problem that most of us have come across sometime or the other.",
                    "Well, the good thing is that you can easily sort it out. Mostly, apps tend to freeze or crash when they are outdated.",
                    "So, make sure the app in question is updated to the latest version (Go to App Store > Profile. After that, head over to the app that you want to update. Then, hit the Update button)."
                ]
            },
            {
                name: "No Newest Version Update",
                image: "iphone7.webp",
                longName: "No Newest Version Update",
                shortDesc: "One of the common iPhone problems is that iPhone is not getting updated to the newest iOS version.",
                longDesc: "One of the common iPhone problems is that iPhone is not getting updated to the newest iOS version.",
                solution: [
                    "One of the common iPhone problems is that iPhone is not getting updated to the newest iOS version.",
                    "The solution goes like this: simply connect your device to Mac or PC and force restart which will bring your iPhone to recovery mode. Then you will be able to see an update option and when you click on it, the update starts and once it is completed your phone will work as normal.",
                    "If in case you couldn’t see update option after force restart, try to restore option which will remove all data from the phone. You will now get the latest software version and can be restored with the backed up data."
                ]
            },
            {
                name: "Screen Is Cracked",
                image: "iphone8.jpg",
                longName: "Screen Is Cracked",
                shortDesc: "There is nothing quite as annoying as a cracked screen, right? Though the cracked phone can be used for a long time, some day it might suddenly become unusable.",
                longDesc: "There is nothing quite as annoying as a cracked screen, right? Though the cracked phone can be used for a long time, some day it might suddenly become unusable.",
                solution: [
                    "There is nothing quite as annoying as a cracked screen, right? Though the cracked phone can be used for a long time, some day it might suddenly become unusable.",
                    "So, it is advisable to contact an iPhone repair centre in Delhi. They may opt for iPhone screen replacement in this case. For this problem, there is a number of do it yourself kits available, but approaching the right service centre is a better option as they will finish the job at a reasonable price and accurately."
                ]
            },
            {
                name: "iPhone Data Lost",
                image: "iphone9.jpg",
                longName: "iPhone Data Lost",
                shortDesc: "It is quite frustrating when you lose all the important data from your phone. But this is yet another common problem in case of iPhones.",
                longDesc: "It is quite frustrating when you lose all the important data from your phone. But this is yet another common problem in case of iPhones.",
                solution: [
                    "It is quite frustrating when you lose all the important data from your phone. But this is yet another common problem in case of iPhones.",
                    "If you have an iCloud backup, the solution will be easy. Just sync your device to iCloud-iPhone. Syncing can be done at night when it is locked. Your missing content will be available in the iCloud. But if you can’t find it there too, you must rush to an Apple store to find any possibilities of getting back the lost data."
                ]
            },
            {
                name: "The Camera Is Not Working",
                image: "iphone10.webp",
                longName: "The Camera Is Not Working",
                shortDesc: "Your iPhone camera will not work if you have any restrictions that are enabled.",
                longDesc: "Your iPhone camera will not work if you have any restrictions that are enabled.",
                solution: [
                    "Your iPhone camera will not work if you have any restrictions that are enabled.",
                    "You can check this by navigating through Settings-General instructions and turn on the Camera. Most of the camera problems will be solved here. If still the camera is not working, try resetting your phone as said earlier.",
                    "If again you didn’t find any improvement, it could be an issue with the hardware. Take it to an iPhone service centre in Delhi to resolve the issue."
                ]
            },
            {
                name: "Rapid Battery Drain",
                image: "iphone11.webp",
                longName: "Rapid Battery Drain",
                shortDesc: "One of the common problems associated with an iPhone is quick battery drainage.",
                longDesc: "One of the common problems associated with an iPhone is quick battery drainage.",
                solution: [
                    "One of the common problems associated with an iPhone is quick battery drainage.",
                    "The best solution is to turn off the unwanted apps that you are using. If the iPhone battery issue still exists, it is advisable to contact a service provider as soon as possible."
                ]
            },
            {
                name: "Damage Due To Water",
                image: "iphone12.webp",
                longName: "Damage Due To Water",
                shortDesc: "For all electronic equipment, water is a nightmare and the same is applicable in the case of iPhones. ",
                longDesc: "For all electronic equipment, water is a nightmare and the same is applicable in the case of iPhones. ",
                solution: [
                    "For all electronic equipment, water is a nightmare and the same is applicable in the case of iPhones. Don’t worry if your phone gets submerged in water, as you can try many solutions before giving up. The first thing to do after taking the phone out of the water is to wipe away all the excess water using a tissue paper.",
                    "Never try to switch on the phone immediately as it leads to permanent damage. The next thing you must do is take a cup of rice and put your phone in it. The rice will absorb the remaining moisture within 24 hours. Also, you can dismantle the phone and dry it manually, but it needs much skill. If the phone is still not working, you can contact the nearby service provider."
                ]
            },
            {
                name: "Not Getting Charged",
                image: "iphone13.webp",
                longName: "Not Getting Charged",
                shortDesc: "Yet another one of the common iPhone problems is the battery not charging when plugged in.",
                longDesc: "Yet another one of the common iPhone problems is the battery not charging when plugged in.",
                solution: [
                    "Yet another one of the common iPhone problems is the battery not charging when plugged in. There are a couple of solutions to this issue. Wipe the charging port to remove dust or debris.",
                    "If the issue still exists, the next step is to check the connection cable if it is working with other Apple devices or if other USB cables are working in the USB plug etc. You can also try to force restart the device, or if it doesn’t work, try a factory reset. If the issue persists, contact the nearest service provider."
                ]
            },
            {
                name: "The Touchscreen Is Not Working",
                image: "iphone14.webp",
                longName: "The Touchscreen Is Not Working",
                shortDesc: "iPhones often face touchscreen issues like when the screen stops responding or if it is displaying only a black screen.",
                longDesc: "iPhones often face touchscreen issues like when the screen stops responding or if it is displaying only a black screen.",
                solution: [
                    "iPhones often face touchscreen issues like when the screen stops responding or if it is displaying only a black screen. The first and foremost solution is to restart your device. If it doesn’t work, charge your device for an hour. Most probably the issue will be solved.",
                    "If the screen is cracked and not responding, it might be a hardware problem. So you will need to go for iPhone screen repair. Try contacting an authorized Apple reseller, and your problem will be fixed at a reasonable price."
                ]
            },
            {
                name: "Bluetooth Issues",
                image: "iphone15.jfif",
                longName: "Bluetooth Issues",
                shortDesc: "Out of many common iPhone problems, issues with Bluetooth can be easily resolved by going to settings-general and selecting reset all options and settings. ",
                longDesc: "Out of many common iPhone problems, issues with Bluetooth can be easily resolved by going to settings-general and selecting reset all options and settings. ",
                solution: [
                    "Out of many common iPhone problems, issues with Bluetooth can be easily resolved by going to settings-general and selecting reset all options and settings. This will remove all saved settings along and solve your issue too."
                ]
            },
            {
                name: "Stuck Volume Button",
                image: "iphone16.webp",
                longName: "Stuck Volume Button",
                shortDesc: "If the volume button gets stuck, you might feel irritated when calls come in during inconvenient hours.",
                longDesc: "If the volume button gets stuck, you might feel irritated when calls come in during inconvenient hours.",
                solution: [
                    "If the volume button gets stuck, you might feel irritated when calls come in during inconvenient hours. There are many solutions to this issue. You can try turning on the airplane mode. So, all calls will be directed to voicemail. ",
                    "Also, you can mute all the sounds on your device. Or you can go to settings-accessibility-assistive touch and turn on assistive mode. Now you will be able to control your device from the home page itself."
                ]
            },
            {
                name: "iPhone Is Slow",
                image: "iphone17.webp",
                longName: "iPhone Is Slow",
                shortDesc: "Sometimes, your iPhone might run slowly. ",
                longDesc: "Sometimes, your iPhone might run slowly. ",
                solution: [
                    "Sometimes, your iPhone might run slowly. Don’t worry as there are multiple solutions to this problem. In order to speed up your phone, try removing all apps, redundant data, useless screenshots and even wipe out the browser cache and history."
                ]
            },
            {
                name: "Not Able To Backup The Data",
                image: "iphone18.webp",
                longName: "Not Able To Backup The Data",
                shortDesc: "Sometimes iPhone won’t backup the data to iCloud. If this is your case, check if iCloud storage is full.",
                longDesc: "Sometimes iPhone won’t backup the data to iCloud. If this is your case, check if iCloud storage is full.",
                solution: [
                    "Sometimes iPhone won’t backup the data to iCloud. If this is your case, check if iCloud storage is full. If it is full, try deleting some data from it. It includes unwanted photos, games etc. game apps take lots of storage space just like a mail app. So clear it off. If you want all the data to be kept, try upgrading the storage plan. Before trying all these steps, you can check for any iOS updates available. If not, try resetting the network options by resetting wifi passwords, cellular and VPN settings. You can do this by going to Settings-General-Reset-Reset Network Settings."
                ]
            }
        ]
    }
]

export {Faults};

