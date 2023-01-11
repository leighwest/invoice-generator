docker build . -t leighwest/invoice-generator-server \
&& docker run -p 5000:5000 -d leighwest/invoice-generator-server
