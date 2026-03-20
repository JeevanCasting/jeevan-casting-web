

const NotFound=()=> {
  return (
    <div>
        <h1 className="text-4xl font-bold text-gray-800">
            Page Not Found
        </h1>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
    </div>
  );
}


export default NotFound;
