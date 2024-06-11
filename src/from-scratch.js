const resolvedWrapper = (value) => {
  const promise = new Promise((resolve, reject) => {
    resolve(value)
  })
  return promise
};

const rejectedWrapper = (str) => {
  const promise = new Promise((resolve, reject) => {
    reject(new Error(str))
  })
  return promise
};

const handleResolvedPromise = (promise) => {
  return promise
  .then((value) => {
    console.log(value)
    return value
  })
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
  .then((value) => {
    console.log(value)
    return value
  })
  .catch((error) => {
    console.error(`Your error message was: ${error.message}`)
    return null;
  })
};

const pauseForMs = (milliseconds) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved")
    }, milliseconds)
  })

  return promise
  .then((value) => {
    console.log("It's been a second!")
  })
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
