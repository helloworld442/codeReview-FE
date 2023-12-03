import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostsLayout from "../layout/PostsLayout";
import CategoryPage from "../pages/CategoryPage";
import PostsPage from "../pages/PostsPage";
import BestPostsPage from "../pages/BestPostsPage";
import QuestionPostsPage from "../pages/QuestionPostsPage";
import WritePage from "../pages/WritePage";
import AuthLayout from "../layout/AuthLayout";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import PostPage from "../pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/write",
    element: <WritePage />,
  },
  {
    path: "/user/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignInPage />,
      },

      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/post/:postId",
    element: <PostPage />,
  },
  {
    path: "/posts/",
    element: <PostsLayout />,
    children: [
      {
        path: ":categoryId",
        element: <PostsPage />,
      },
      {
        path: "best/:categoryId",
        element: <BestPostsPage />,
      },
      {
        path: "question/:categoryId",
        element: <QuestionPostsPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
