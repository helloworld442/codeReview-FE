import PostDetail from "../components/Post/PostDetail";
import PostASide from "../components/Post/PostASide";
import PostTemplate from "../components/Post/PostTemplate";
import PostLayout from "../layout/PostLayout";

export default function PostPage() {
  return (
    <PostLayout>
      <PostTemplate>
        <PostDetail />
        <PostASide />
      </PostTemplate>
    </PostLayout>
  );
}
