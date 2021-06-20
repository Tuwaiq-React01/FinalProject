﻿using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using TuwaiqCVMaker.Controllers;
using TuwaiqCVMaker.Data;
using TuwaiqCVMaker.Models;

namespace TuwaiqCVMakerTests
{
    public class SkillsControllerTests
    {
        private ApplicationDbContext _db;
        
        [SetUp]
        public void Setup()
        {
            this._db = new Setup().Database("Skills");
        }
        
        [Test]
        public async Task IndexTests()
        {
            // Arrange
            var expectedSkillsCount = 2;
            var expectedStatusCode = 200;
            
            var user = new ClaimsPrincipal(new ClaimsIdentity(new Claim[] {
                new Claim(ClaimTypes.NameIdentifier, "ahmed"),
                new Claim(ClaimTypes.Name, "Ahmed Alzubaidi")
            },"TestAuthentication"));
            var controller = new SkillsController(this._db);
            controller.ControllerContext = new ControllerContext();
            controller.ControllerContext.HttpContext = new DefaultHttpContext { User = user };
            
            // Act
            var actionResult = await controller.Get(1);
            
            // Assert
            Assert.IsTrue(actionResult.Result is OkObjectResult, "Invalid action result type");
            var result = actionResult.Result as OkObjectResult;
            
            Assert.AreEqual(expectedStatusCode, result.StatusCode, "Invalid status code");

            Assert.IsTrue(result.Value is List<Skill>, "Invalid value type");
            var skills = result.Value as List<Skill>;
            
            Assert.AreEqual(expectedSkillsCount, skills.Count, "Invalid list count");
            Assert.Pass();
        }
    }
}