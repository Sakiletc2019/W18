export async function executeCode(code: string): Promise<void> {
    console.log("Executing machine code...");
    
    // Use a Deno eval-like approach to dynamically execute code
    const tempFile = new TextEncoder().encode(code);
    const tempFilePath = "./temp.ts";
  
    // Write the code to a temporary file
    await Deno.writeFile(tempFilePath, tempFile);
  
    try {
      // Dynamically import and execute the temporary file
      const module = await import(`file://${Deno.cwd()}/${tempFilePath}`);
      console.log("Execution result:", module);
    } catch (error) {
      console.error("Error executing code:", error);
    } finally {
      // Clean up temporary file
      await Deno.remove(tempFilePath);
    }
  }
  