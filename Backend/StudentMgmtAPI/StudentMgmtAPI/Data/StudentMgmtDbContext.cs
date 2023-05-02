using Microsoft.EntityFrameworkCore;
using StudentMgmtAPI.Models;

namespace StudentMgmtAPI.Data
{
    public class StudentMgmtDbContext : DbContext
    {
        public StudentMgmtDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
