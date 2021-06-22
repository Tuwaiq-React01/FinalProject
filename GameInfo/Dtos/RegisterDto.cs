using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameInfo.Dtos
{
    public class RegisterDto
    {
        public string Username { set; get; }
        public string Email { set; get; }
        public string Password { set; get; }
    }
}
