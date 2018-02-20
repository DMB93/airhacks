
package com.airhacks.fin.notifications.boundary;

import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@Startup
@Singleton
@ServerEndpoint("/notifications")
public class NotificationEndpoint {

    private Session session;

    @OnOpen
    public void onConnect(Session session) {
        this.session = session;

    }

    @OnMessage
    public void wurst(String message) {
        if (this.session != null) {
            this.session.getAsyncRemote().sendText("Echo: " + message);
        }

    }

    @Schedule(minute = "*", second = "*/5", hour = "*")
    public void pushToBrowser() {
        System.out.println(".");
        if (this.session != null && this.session.isOpen()) {
            this.session.getAsyncRemote().sendText("Hello from backend: " + System.currentTimeMillis());
        }

    }


}
