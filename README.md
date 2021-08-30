# FE-1

"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -b main -d build",
    "start": "react-scripts start",
    "build": "set 'GENERATE_SOURCEMAP=false' && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },


  "build": "npm run cleanBuild && set \"GENERATE_SOURCEMAP=false\" && react-scripts build ",



  //// users table
  const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdDate: {
        type: String,
        required: true,
    }
})


/// material theme conditionally
style={{ borderBottomColor: errors.firstName ?  `1px solid ${theme.palette.error.main}` : '' }}

 const theme = useTheme();
  console.log(theme)