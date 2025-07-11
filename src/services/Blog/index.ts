"use server";

export const getBlogById = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/blog/${id}`);
    const data = await res.json();
    return data;
}

export const getAllBlogs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/blog`);
    const data = await res.json();
    return data;
}



