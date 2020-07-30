# G-image bug replication

How to reproduce

1. Clone repo
2. Run `npm i`
3. Run `gridsome develop`
4. Open developer tools and open network tab. Open `http://localhost:8080/`
5. On the home page, you will see 2 images being loaded before they are visible in the viewport
