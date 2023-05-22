console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push Recieved...");
    self.registration.showNotification(data.title, {
        body: "Notified from Divyanshu!",
        icon: "http://image.ibb.co/frYOFd/tmlogo.png",
        // onclick: () => console.log("notification")
        //window.location = "https://www.youtube.com/watch?v=1Hh4tjnoqDM&t=298s"


    });
});