import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(`https://api.example.com/posts/${ctx.query.postId}`);
  const post = await res.json();
  return { props: { post } };
};

const PostDetailPage = ({ post }: any) => {
  return (
    <div>
      {post.name}
    </div>
  )
}

export default PostDetailPage
