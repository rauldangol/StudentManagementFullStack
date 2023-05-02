using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentMgmtAPI.Data;
using StudentMgmtAPI.Models;

namespace StudentMgmtAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentMgmtController : Controller
    {
        private readonly StudentMgmtDbContext _fullStackDbContext;
        public StudentMgmtController(StudentMgmtDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _fullStackDbContext.Students.ToListAsync();

            return Ok(students);
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent([FromBody] Student studentRequest)
        {
           await _fullStackDbContext.Students.AddAsync(studentRequest);
           await _fullStackDbContext.SaveChangesAsync();

            return Ok(studentRequest);
        }

        [HttpGet]
        [Route("{id:int}")]

        public async Task<IActionResult> getStudent([FromRoute] int id)
        {
           var student = await _fullStackDbContext.Students.FirstOrDefaultAsync(x => x.Id == id);

            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateStudent([FromRoute] int id, Student updateStudentRequest)
        {
            var student = await _fullStackDbContext.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            student.Name = updateStudentRequest.Name;
            student.Email = updateStudentRequest.Email;
            student.Phone = updateStudentRequest.Phone;
            student.Address = updateStudentRequest.Address;
            student.Age = updateStudentRequest.Age;
            student.Gender = updateStudentRequest.Gender;

            await _fullStackDbContext.SaveChangesAsync();
            return Ok(student);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteStudent([FromRoute] int id)
        {
            var student = await _fullStackDbContext.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Students.Remove(student);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(student);
        }

    }
}
