# Lab 5 - Starter

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Group Members: Ryan Dang

https://ryandang363.github.io/Lab5_Starter/expose.html
https://ryandang363.github.io/Lab5_Starter/explore.html

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, I wouldn't use a unit test in this case -- at least not a single one. Sending a message involves way to many parts: the input UI, formatting or validation logic, networking, authentication, routing to the right recipient, delivery status, and storage. In order to have a situation you can properly write a unit test for, we should be isolating each of those components. Integration tests would better suit what we're trying to test here

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would definitely use a unit tests here. The behavior is a clear rule that's been enforced--80 character max in this case. You can test many cases quickly in isolation: 80 characters exactly, more than 80 characters, the empty string, and other possible edge cases.
