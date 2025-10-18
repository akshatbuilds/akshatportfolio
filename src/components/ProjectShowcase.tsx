import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const ProjectShowcase = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground">
              Building the Future with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                AI & Agentic Systems
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
          alt="AI and Technology Showcase"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default ProjectShowcase;
