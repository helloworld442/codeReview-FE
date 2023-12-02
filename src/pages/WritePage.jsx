import WriteForm from "../components/Write/WriteForm";
import WriteHead from "../components/Write/WriteHead";
import WriteTemplate from "../components/Write/WriteTemplate";
import WriteLayout from "../layout/WriteLayout";

export default function WritePage() {
  return (
    <WriteLayout>
      <WriteTemplate>
        <WriteHead />
        <WriteForm />
      </WriteTemplate>
    </WriteLayout>
  );
}
