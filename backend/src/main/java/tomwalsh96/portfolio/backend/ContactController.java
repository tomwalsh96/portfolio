package tomwalsh96.portfolio.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")
public class ContactController {

  @Autowired
  EmailSenderService emailSender;

  // @CrossOrigin(origins = {"http://localhost:3000", "http://frontend:80", "http://localhost", "http://frontend"})
  @CrossOrigin("*")
  @PutMapping("/v1/contact")
  public void sendEmail(
    @RequestParam(required = true) String fromEmail,
    @RequestParam(required = true) String name,
    @RequestParam(required = true) String body
  ) {
    emailSender.sendSimpleEmail(fromEmail, name, body);
  }

}
