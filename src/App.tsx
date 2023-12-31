import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { SelectItem, Select, SelectContent, SelectTrigger, SelectValue  } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {

  return (
      <div className='min-h-screen flex flex-col'>
        <div className="px-6 py-3 flex items-center justify-between border-b">
            <h1 className="text-xl font-bold">upload.ai</h1>


          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Desenvolvendo com 💙 no NLW da Rocketseat
            </span>

              <Separator orientation='vertical' className='h-6'/>

              <Button variant='outline'>
                <Github className='a-4 h-4 mr-2'/>
                 Github
              </Button>    
          </div>
        </div>  

        <main className='flex-1 p-6 flex gap-6'>
          <div className='flex flex-col flex-1 gap-4'>
              <div className='grid grid-rows-2 gap-4 flex-1'>
                    <Textarea 
                      className='resize-none p-4 leading-relaxed'
                      placeholder='Inclua o prompt para a IA...'
                    />

                    <Textarea 
                      className='resize-none p-4 leading-relaxed'
                      placeholder='Resultado gerado pela IA...' 
                      readOnly
                    />
              </div>

              <p className='text-sm text-muted-foreground'>
                Lembre-se: você pode utilizar a variavel <code className='text-violet-400'>{'{transcription}'}</code> no seu prompt para adicionar o conteudo da transcrição do video.
              </p>
          </div>

          <aside className='w-80 space-y-6'>
              <form className='space-y-4'>
                <label 
                    htmlFor="video" 
                    className='cursor-pointer flex border rounded-md aspect-video border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-slate-200/5'
                >
                    <FileVideo className='w-4 h-4'/>
                    Selecione um video
                </label>

                <input type="file" id='video' accept='video/mp4' className='sr-only'/>

                <Separator />

                <div className='space-y-2'>
                    <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
                    <Textarea 
                      id='transcription_prompt' 
                      className='h-20 leading-relaxed resize-none'
                      placeholder='Inclua palavras-chave mencionadas no video separadas por virgula (,)'
                    />
                </div>

                <Button type='submit' className='w-full'>
                  Carregar video
                  <Upload className='w-4 h-4 ml-2'/>
                </Button>
              </form>

              <Separator />

              <form className='space-y-6'>

              <div className='space-y-2'>
                  <label>Prompt</label>

                  <Select>
                      <SelectTrigger>
                          <SelectValue placeholder="Selecione um prompt"/>
                      </SelectTrigger>

                      <SelectContent>
                          <SelectItem value='title'>Titulo do YouTube</SelectItem>
                          <SelectItem value='description'>Descrição do YouTube</SelectItem>
                      </SelectContent>
                  </Select>

                  <span className='block text-xs text-muted-foreground italic'>Você poderá customizar essa opção em breve</span>
                </div>

                <div className='space-y-2'>
                  <label>Modelo</label>

                  <Select defaultValue='gpt3.5' disabled>
                      <SelectTrigger>
                          <SelectValue />
                      </SelectTrigger>

                      <SelectContent>
                          <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                      </SelectContent>
                  </Select>

                  <span className='block text-xs text-muted-foreground italic'>Você poderá customizar essa opção em breve</span>
                </div>

                <Separator />

                <div className='space-y-4'>
                  <label>Temperatura</label>
                  <Slider 
                    min={0}
                    max={1}
                    step={0.1}
                  />

                  <span className='block text-xs text-muted-foreground italic'>Valores mais altos tendem a deixar o resultado mais criativo e com possivei erros</span>
                </div>

                <Separator />

                <Button type='submit' className='w-full'>
                    Executar    
                    <Wand2 className='w-4 h-4 ml-2'/>
                </Button>
              </form>


          </aside>
        </main>
      </div>
  )
}
