"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const ManifestForm = () => {
  type Inputs = {
    name: string;
    short_name: string;
    description: string;
    start_url: string;
    display: string;
    background_color: string;
    theme_color: string;
    orientation: string;
    scope: string;
  };

  const [background_color, set_background_color] = useState("#000000");
  const [theme_color, set_theme_color] = useState("#000000");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {};

  return (
    <div className="flex gap-5">
      <form
        className="flex flex-col gap-7 mt-10 w-fit "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-36">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-56 text-black"
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">Name is required</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="short_name">Short Name</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-56 text-black"
              type="text"
              id="short_name"
              {...register("short_name", { required: true })}
            />
            {errors.short_name && (
              <span className="text-red-500 text-xs">
                Short Name is required
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-36">
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-56 text-black text-sm"
              id="description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 text-xs">
                Description is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="start_url">Display</label>
            <select
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-56 text-black"
              id="display"
              {...register("display", { required: true })}
            >
              <option value="standalone">Standalone</option>
              <option value="fullscreen">Fullscreen</option>
              <option value="minimal-ui">Minimal UI</option>
              <option value="browser">Browser</option>
            </select>
          </div>
        </div>

        <div className="flex gap-36">
          <div className="flex flex-col gap-2">
            <label htmlFor="orientation">Orientation</label>
            <select
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-56 text-black"
              id="orientation"
              {...register("orientation", { required: true })}
            >
              <option value="any">Any</option>
              <option value="natural">Natural</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
              <option value="portrait-primary">Portrait Primary</option>
              <option value="portrait-secondary">Portrait Secondary</option>
              <option value="landscape-primary">Landscape Primary</option>
              <option value="landscape-secondary">Landscape Secondary</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="scope">Scope</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-56 text-black"
              type="text"
              id="scope"
              defaultValue={"/"}
              {...register("scope", { required: true })}
            />

            {errors.scope && (
              <span className="text-red-500 text-xs">Scope is required</span>
            )}
          </div>
        </div>
        <div className="flex gap-36">
          <div className="flex flex-col gap-2">
            <label htmlFor="start_url">Start URL</label>
            <input
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-56 text-black"
              type="text"
              id="start_url"
              {...register("start_url", { required: true })}
            />
            {errors.start_url && (
              <span className="text-red-500 text-xs">
                Start URL is required
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-36">
          <div className="flex flex-col gap-2">
            <label htmlFor="background_color">Background Color</label>
            <div className="flex gap-2 bg-white p-2 rounded-md w-56">
              <input
                className="w-10 h-10 rounded-md cursor-pointer"
                type="color"
                value={background_color}
                onChange={(e) => set_background_color(e.target.value)}
              />
              <input
                className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-40 text-black"
                type="text"
                value={background_color}
                {...register("background_color", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="theme_color">Theme Color</label>
            <div className="flex gap-2 bg-white p-2 rounded-md w-56">
              <input
                className="w-10 h-10 rounded-md cursor-pointer"
                type="color"
                value={theme_color}
                onChange={(e) => set_theme_color(e.target.value)}
              />
              <input
                className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-cyan-500 transition-all duration-300 ease-in-out w-40 text-black"
                type="text"
                value={theme_color}
                {...register("theme_color", { required: true })}
              />
            </div>
          </div>
        </div>
      </form>
      // code-block preview
      <div>{getValues("name")}</div>
    </div>
  );
};

export default ManifestForm;
