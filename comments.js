
emailjs.init("TEi32ue89l37Ce8JD");

    // 处理表单提交
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // 防止表单默认提交

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // 使用EmailJS发送邮件
        emailjs.send("service_sgqm8sy","template_4rwkfwn",formData)
            .then(function (response) {
                console.log('留言发送成功', response);
                alert("您的留言已成功发送！");
            }, function (error) {
                console.log('留言发送失败', error);
                alert("留言发送失败，请稍后再试。");
            });
    });