"use client"
import useFetch from "@/hooks/use-fetch/use-fetch";
import { UsersService } from "@/services/users/users";


export default  function Home() {

  const {data, isLoading} = useFetch(() => UsersService.getUsers())


  console.log({data, isLoading})

  return (
   <p>Main</p>
  );
}
