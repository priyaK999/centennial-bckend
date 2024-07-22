const contactUsTemplate = (userName, userEmail, userMessage) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <title>Contact Us Message</title>
      <style>
        body {
          background-color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #333333;
          margin: 0;
          padding: 0;
        }
    
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
    
        .logo {
          max-width: 200px;
          margin-bottom: 20px;
        }
    
        .message {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
    
        .body {
          font-size: 16px;
          margin-bottom: 20px;
          text-align: left;
        }
    
        .cta {
          display: inline-block;
          padding: 10px 20px;
          background-color: #FFD60A;
          color: #000000;
          text-decoration: none;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          margin-top: 20px;
        }
    
        .support {
          font-size: 14px;
          color: #999999;
          margin-top: 20px;
        }
    
        .highlight {
          font-weight: bold;
        }
      </style>
    
    </head>
    
    <body>
      <div class="container">
        <a href="https://yourwebsite.com">
          <img class="logo" src="https://example.com/your-logo.png" alt="Your Logo">
        </a>
        <div class="message">Contact Us Message</div>
        <div class="body">
          <p><strong>Name:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${userMessage}</p>
        </div>
        <div class="support">If you have any further questions or need assistance, please feel free to reach out to us at <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>. We are here to help!</div>
      </div>
    </body>
    
    </html>`;
  };
  
  module.exports = contactUsTemplate;
  