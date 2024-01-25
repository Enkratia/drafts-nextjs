import React from 'react'

// ***************************************//
//============= ПРИМЕНЕНИЕ ===============//
// ***************************************//

export const testComponent = () => {
  const onExample = {
    // очистить серверные данные
    revalidatePathAction();
    // очистить клиентские данные
    reinitApp();
    // переход (опционально (по коллбэку при входе в аккаунт, напр.))
    router.push("");
  }

  return (
    <div>testComponent</div>
  )
}
