import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostLayout from "../layout/PostLayout";
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
import ErrorPage from "../pages/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/post/",
    element: <PostLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":postId",
        element: <PostPage />,
      },
    ],
  },
  {
    path: "/posts/",
    element: <PostsLayout />,
    errorElement: <ErrorPage />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
