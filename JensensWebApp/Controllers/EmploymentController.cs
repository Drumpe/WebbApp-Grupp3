using JensensWebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace JensensWebApp.Controllers
{
    [Route("[controller]")]
    public class EmploymentController : Controller
    {
        [HttpGet("JobApplication")]
        public IActionResult JobApplication()
        {
            return View();
        }
        [HttpPost("SubmitJobApplication")]
        public IActionResult SubmitJobApplication(JobApplication model)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("ThankYou");
            }

            return View("JobApplication", model);
        }
        [HttpGet("ThankYou")]
        public IActionResult ThankYou()
    {
        return View();
    }

        [HttpGet("Error")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}