namespace JensensWebApp.Models
{
    public class JobApplication
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }
        public string Experience { get; set; }
        public IFormFile CV { get; set; }
        
    }
}