import FormSurvey from "../components/FormSurvey";
import SurveyData from "../components/SurveyData";

export default function Survey() {
  return (
    <main className='p-5 h-dvh'>
      <section className='h-full grid grid-cols-3 p-10 gap-6 border-2 rounded-xl'>
        <SurveyData />
        <FormSurvey />
      </section>
    </main>
  );
}
