using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ChatApp.Data;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.Hubs
{
    public class ChatHub : Hub
    {
        private readonly ApplicationDbContext _db;
        public ChatHub(ApplicationDbContext context)
        {
            _db = context;
        }
        public async Task SendMessage(string roomName, string user, string message)
        {
            //await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
            Console.WriteLine(roomName);
            Console.WriteLine(user);
            Console.WriteLine(message);
            //await Clients.All.SendAsync("ReceiveMessage", user, message);
            await Clients.Group((string)roomName).SendAsync("ReceiveMessage", (string)user, (string)message);
            //Console.WriteLine(Clients.Group(roomName).SendAsync("ReceiveMessage", user, message).Id);
            Console.WriteLine("----send----");
        }

        public async Task JoinRoom(string roomName)
        {
            Console.WriteLine("----join room----");
          //  var userName = _db.UserProfiles.ToList().Find(user => user.Id == Context.UserIdentifier).Name;
            var userName ="tester";
            await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
            await Clients.Group(roomName).SendAsync("ReceiveNotify", userName + " has joined the room.");
        }


        public async Task LeaveRoom(string roomName)
        {
            //var userName = _db.UserProfiles.ToList().Find(user => user.Id == Context.UserIdentifier).Name;
            var userName ="tester";
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);
            await Clients.Group(roomName).SendAsync("ReceiveNotify", $"{userName} just left the room.");
            Console.WriteLine("----left room----");
        }

        // was just this
       /* public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }*/
    }

}
