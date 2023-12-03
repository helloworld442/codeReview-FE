import PostDetail from "../components/Post/PostDetail";
import PostTemplate from "../components/Post/PostTemplate";
import PostUser from "../components/Post/PostUser";
import PostLayout from "../layout/PostLayout";

export default function PostPage() {
  return (
    <PostLayout>
      <PostTemplate>
        <PostDetail />
        <PostUser />
      </PostTemplate>
    </PostLayout>
  );
}
