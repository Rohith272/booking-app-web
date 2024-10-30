import CreateOrganizerForm from "./form";

const CreateOrganizerPage = () => {
  return (
    <div className="overflow-y-auto">
      <h1 className="py-8 text-center text-xl font-semibold">
        Create Organizer
      </h1>
      <div className="mx-auto max-w-screen-lg">
        <CreateOrganizerForm />
      </div>
    </div>
  );
};

export default CreateOrganizerPage;
