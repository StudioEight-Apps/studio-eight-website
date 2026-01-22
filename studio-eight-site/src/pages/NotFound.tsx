import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-medium mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Page not found</p>
        <Link 
          to="/" 
          className="text-foreground underline underline-offset-4 hover:no-underline"
        >
          Go home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
