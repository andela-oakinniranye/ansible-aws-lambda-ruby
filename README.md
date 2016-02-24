# Ansible AWS Lambda Ruby

This is an Ansible role I created to play around with [AWS Lambda](https://aws.amazon.com/lambda/) and package up a Ruby script to be executed by a Lambda function. [Traveling Ruby](http://phusion.github.io/traveling-ruby/) is used to include the Ruby runtime in the package.

[The Ansible AWS Lambda module is not yet included in core](https://github.com/ansible/ansible-modules-extras/pull/1270), so for now it must be present in any playbook that uses this role. [Here is an example playbook I used to test this role](https://github.com/krautcomputing/ansible-aws-lambda-ruby-test).

I sure hope AWS Lambda supports Ruby natively soon!

## Acknowledgements

This code based on the projects of [qrush](https://github.com/qrush) and [lorennorman](https://github.com/lorennorman) who did the bulk of the work:

* https://github.com/qrush/lambda-function-wrapper-ruby
* https://github.com/lorennorman/ruby-on-lambda

I simply took the Shell scripts they wrote and packaged them up in an Ansible role since this is what I like to use to automate stuff.
