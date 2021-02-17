import {PoolConnection} from 'mysql2/promise';
import {connect} from '../../database';
import {TaskDB} from '../../interfaces/tasks';

export function getTasks(userID: number | string): Promise<TaskDB> {
  return new Promise<TaskDB>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      const [tasks]: any = await conn.query(
        `
      SELECT
      tasks.creationDate,
      tasks.taskID,
      activities.activity,
      activities.color,
      activities.importance,
      activities.startDate,
      activities.finalDate
      FROM tasks
      JOIN activities ON tasks.activityID = activities.activityID
      WHERE activities.userID = ?
      `,
        [userID]
      );
      conn.release();
      resolved(tasks);
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function insertActivity(
  userID: number | string,
  activity: string,
  color: string,
  importance: 'i-1' | 'i-2' | '1-3' | 'i-4',
  startDate: Date,
  finalDate: Date
): Promise<string | number> {
  return new Promise<string | number>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      const [[response]]: any = await conn.query('CALL insertActivity(?,?,?,?,?,?)', [
        userID,
        activity,
        importance,
        color,
        startDate,
        finalDate,
      ]);
      conn.release();
      resolved(response[0].insertId);
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function insertTask(
  activityID: number | string,
  creationDate: Date
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL insertTask(?,?)', [activityID, creationDate]);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function updateActivity(
  userID: number | string,
  activityID: number | string,
  activity: string,
  color: string,
  importance: 'i-1' | 'i-2' | '1-3' | 'i-4',
  startDate: Date,
  finalDate: Date
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL updateActivity(?,?,?,?,?,?,?)', [
        userID,
        activityID,
        activity,
        color,
        importance,
        startDate,
        finalDate,
      ]);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function deleteActivity(
  userID: number | string,
  activityID: number | string
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL deleteActivity(?, ?)', [userID, activityID]);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function createProject(userID: string | number): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      const [[response]]: any = await conn.query('CALL insertProject(?,?)', [
        userID,
        new Date(),
      ]);
      conn.release();
      resolved(response[0].insertId);
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function insertProjectTask(
  projectID: number | string,
  activityID: number | string
): Promise<number> {
  return new Promise<number>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      const [[response]]: any = await conn.query('CALL insertProjectTask(?,?,?)', [
        projectID,
        activityID,
        new Date(),
      ]);
      conn.release();
      resolved(response[0].insertId);
    } catch (e) {
      reject(e);
    }
  });
}

//------------------------------PROJECTS-------------------------------
//------------------------------PROJECTS-------------------------------

export function getProjects(userID: number | string): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function updateProject(
  userID: number | string,
  projectID: number | string,
  title: string,
  description: string,
  color: string
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function deleteProject(
  userID: number | string,
  projectID: number | string
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function getProjectTasks(
  userID: number | string,
  projectID: number | string
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function getRoutineTasks(
  userID: number | string,
  routineID: number | string
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function createRoutineTask(
  routineID: number | string,
  activity: string,
  done: 0 | 1,
  color: string,
  importance: 'i-1' | 'i-2' | '1-3' | 'i-4',
  startTime: Date,
  finalTime: Date
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function updateRoutineTask(
  daily_activityID: number | string,
  activity: string,
  done: 0 | 1,
  color: string,
  importance: 'i-1' | 'i-2' | '1-3' | 'i-4',
  startTime: Date,
  finalTime: Date
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function deleteRoutineTask(
  userID: number | string,
  acticityID: number | string
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function getRoutines(userID: number | string): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function createRoutine(userID: number | string): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function updateRoutine(
  userID: number | string,
  routineID: number | string,
  title: string,
  description: string,
  active: 0 | 1
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

export function deleteRoutine(
  userID: number | string,
  routineID: string | number
): Promise<void> {
  return new Promise<void>(async (resolved, reject) => {
    const conn: PoolConnection = await connect();
    try {
      await conn.query('CALL name(?)', []);
      conn.release();
      resolved();
    } catch (e) {
      reject(e);
    }
  });
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

// export function name(userID: number | string): Promise<void> {

//   return new Promise<void>(async (resolved, reject) => {
//     const conn: PoolConnection = await connect();
//     try {
//       await conn.query('CALL name(?)', []);
//       conn.release();
//       resolved();
//     } catch (e) {
//       reject(e);
//     }
//   });
// }
