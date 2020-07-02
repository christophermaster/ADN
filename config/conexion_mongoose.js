import mongoose from 'mongoose';

const uri = "mongodb+srv://adn:adnprueba@cluster0.ushwk.mongodb.net/adn?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a DB') },
  /** handle initial connection error */
  err => { console.log(err) }
);

export default mongoose;