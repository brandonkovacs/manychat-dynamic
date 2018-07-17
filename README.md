# manychat-dynamic
Manychat Dynamic Content via Node.js &amp; Express w/ SSL Support.

**Requirements**
1. SSL Certificate ([LetsEncrypt](http://letsencrypt.com/))

**Installation**
1. ``git clone https://github.com/brandonkovacs/manychat-dynamic``
2. ``npm install``

**Usage**
1. Set Environment Variables (See Below)
2) ``node index.js``

**Environment Variables**
* ``export PORT=8080``
* ``export SSL_KEY=/path/to/privkey.pem``
* ``export SSL_CERT=/path/to/certificate.pem``

**Make sure to set the Manychat Dynamic Content Block URL to our SSL-enabled endpoint.**
