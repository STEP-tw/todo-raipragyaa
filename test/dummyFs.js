class mockFileSystem {
  constructor() {
    this.files = {};
  }
  addFile(file,content){
    this.files[file]=content;
  }
  existsSync(filePath){
   return Object.keys(this.files).includes(filePath);
  }
  appendFile(file,content){
    this.files[file]+=content;
  }
  readFileSync(file,encoding){
    if(!this.files[file]){
      return this.files[file]
    }
    throw new Error('file not found')
  }
  readFile(file,callback){
    let error = null;
    if(!this.files[file]){
      error = new Error('file not found')
    }
    callback(this.files[file],error)
  }
  writeFileSync(file,content){
    this.files[file]=content;
  }
}

module.exports=mockFileSystem;
