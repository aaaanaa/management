const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const upload = multer({dest: './upload'})

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/any',
            'name': '이현아',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길둥',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
          }
    ]);
});

// app.use('/image', express.static('./upload'));

// app.post('/api/customers', upload.single('image'), (req, res) => {
//   let sql = 
// })

app.listen(port, () => console.log(`Listening on port ${port}`));