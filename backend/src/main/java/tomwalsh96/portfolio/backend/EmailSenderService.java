package tomwalsh96.portfolio.backend;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
  
  @Autowired
  private JavaMailSender mailSender;

  public void sendSimpleEmail(String fromEmail, String name, String body) {

    SimpleMailMessage message = new SimpleMailMessage();

    String text = "Message from: " + name + "\n"
         + "Email: " + fromEmail + "\n"
         + "\n"
         + body;

    message.setFrom(fromEmail);
    message.setTo("tomwalsh96@gmail.com");
    message.setSubject(name);
    message.setText(text);

    mailSender.send(message);

    System.out.println("email sent");

  }
}
